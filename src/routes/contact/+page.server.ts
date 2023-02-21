import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';
import { z, ZodError } from 'zod';
import { MapContactForm } from '../../lib/ContactFormMapper';
import type { ContactForm } from '../../types/ContactForm';
import type { PageServerLoad } from './$types';

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

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    submit: async ({ request }) => {
        const contactForm: ContactForm = MapContactForm(await request.formData());

        try {
            // If parsing works - submit else catch the parsing error and return to user form.
            const parsedContactForm = schema.parse(contactForm);
            const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
            const data = {
                records: [
                    {
                        fields: {
                            name: parsedContactForm.name,
                            email: parsedContactForm.email,
                            message: parsedContactForm.message,
                        },
                    },
                ],
            }

            await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),

            })

        } catch (error: unknown) {
            const err = error as ZodError;
            const { fieldErrors: errors } = err.flatten();
            const { ...rest } = contactForm;
            return {
                data: rest,
                errors,
            }
        }
    }
};