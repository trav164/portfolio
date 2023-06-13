import { SENDGRID_API_KEY } from '$env/static/private';
import { fail, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import sgMail from '@sendgrid/mail';
import { redirect } from 'sveltekit-flash-message/server';
import type { PageServerLoad } from './$types';

// This schema will be your source of truth moving forward. All the types you need will infer
// from this. You can also use this with a library like Felte to get client side validation running - 
// same validator in 2 places. 
const schema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .min(1, { message: 'Name is required' })
        .max(64, { message: 'Name must be less than 64 characters' })
        .trim(),
    email: z
        .string({ required_error: 'Email is required' })
        .min(1, { message: 'Email is required' })
        .max(64, { message: 'Email must be less than 64 characters' })
        .email({ message: 'Email must be a valid email address' }),
    message: z
        .string({ required_error: 'Message is required' })
        .min(1, { message: 'Message is required' })
        .max(2048, { message: 'Message must be less than 2048 characters' })
        .trim(),
});

export const load = (async (event) => {
    const form = await superValidate(event, schema);

    return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
    submit: async (event) => {

        const form = await superValidate(event, schema);

        if (!form.valid) {
            return fail(400, {
                form
            })
        }

        sgMail.setApiKey(SENDGRID_API_KEY);
        const msg = {
            to: 'lewis@lewistravis.co.uk', // Change to your recipient
            from: {
                name: 'Portfolio Message',
                email: `lewis@lewistravis.co.uk`
            }, // Change to your verified sender
            subject: 'You have recieved a message from your portfolio',
            html: `
            FROM: ${form.data.email}
            <br>
            MESSAGE: ${form.data.message}
            `,
        }

        const res = await sgMail.send(msg);

        if (res[0].statusCode === 202) {
            const message = { type: 'success', message: 'Your message was sent successfully!' } as const;
            throw redirect('/', message, event);
        }

        const message = { type: 'error', message: 'Something went wrong when trying to send your message.' } as const;
        throw redirect('/', message, event);

    },


    // oldSubmit: async ({ request }) => {
    //     // NOTE this function body will only plan for and care about 'expected' errors.
    //     // If anything goes wrong that is not on the happy path, the error will 
    //     // propagate up to the 'handleError' hook and should be handled there. This saves
    //     // you the brain damage of defensivly programming against every possible error. 

    //     // This extracts the raw form data. Note that at this point we don't know 
    //     // what shape this data is in. We only care that it converts to a standard 
    //     // JS object. 
    //     const formdata = Object.fromEntries(await request.formData());

    //     // here we run the formdata through the Zod validator. Zod doesn't care what you give it.
    //     // It's job is to confirm for you that what it received is the shape expected in the schema.
    //     // No need to shape it first. 
    //     //
    //     // By using 'safeParse' instead of just 'parse', Zod will not throw an error if the validation
    //     // fails. Instead it will return an object whether it fails or not. The object shape is described at
    //     // https://zod.dev/?id=safeparse, and if there is an error the error shape is described 
    //     // at https://zod.dev/?id=error-handling
    //     const parsedContactForm = schema.safeParse(formdata);

    //     // Here you check if the parse was successful. The object that the validator returned has a 'success' 
    //     // property that will be true or false. If false, you can act on the error condition.
    //     if (!parsedContactForm.success) {
    //         // If you got into this block, there is a validation error. The 'error' property will be populated. 
    //         // Using the ZodError shape, we can map over the errors to transform to a shape the front end can use
    //         // TS also knows inside this block that parsedContactForm.errors is populated. 
    //         const errors = parsedContactForm.error.errors.map(err => {
    //             return {
    //                 // The 'err.path' field is an array, and the first index will always be populated. 
    //                 field: err.path[0],

    //                 //This is the error message from the validator. 
    //                 message: err.message
    //             }
    //         })

    //         // Here we leverage Sveltekit's built in 'fail' function to throw the errors back up the stack
    //         // SK treats this differently than a standard error. 
    //         // This allows them to populate on the client side via some SK magic. 
    //         // This also ends execution for the lines below. 
    //         // Because we use progressive enhancment on the form we don't have to send back the form data to re-populate the form.
    //         return fail(400, { error: true, errors })
    //     }

    //     // If you got here, you have valid form data. Now you can extract it. 

    //     const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
    //     const data = {
    //         records: [
    //             {
    //                 fields: {
    //                     // Here the 'data' property of what the validator spit out is used. 
    //                     // This is fine because the data is known to be valid by this point. 
    //                     // The validator also made sure it's in the shape you need. 
    //                     ...parsedContactForm.data,
    //                     date: new Date,
    //                 },
    //             },
    //         ],
    //     }

    //     // If this fetch call throws or fails for some reason, we let it propagate. 
    //     // Once an error is thrown the system is in an unexpected state and becomes difficult to 
    //     // reason about. SK plans for this, so the 'handleError' hook will catch the error. 
    //     await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })

    //     // If you got this far, everything worked as expected. You can use the built in redirect
    //     // functionality to get the client where you want them. 
    //     throw redirect(301, "/");
    // }
};