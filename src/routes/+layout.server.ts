import { loadFlashMessage } from 'sveltekit-flash-message/server';

export const load = loadFlashMessage(async (event) => {
    const data = {};
    return data;
});