import type { HandleServerError } from '@sveltejs/kit';


export const handleError = (({ error, event }) => {
    return {
        message: 'Something went submitting your message. Please try again later',
    };
}) satisfies HandleServerError;