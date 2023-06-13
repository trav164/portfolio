import { fail, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import sgMail from '@sendgrid/mail';
import { redirect } from 'sveltekit-flash-message/server';
import type { PageServerLoad } from './$types';
import { SECRET_SENDGRID_API_KEY } from '$env/static/private';

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

        sgMail.setApiKey(SECRET_SENDGRID_API_KEY);
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
};