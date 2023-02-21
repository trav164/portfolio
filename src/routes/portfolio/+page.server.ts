import type { PageServerLoad } from './$types';

export const load = (async () => {
    // Fetch any data I might need for the portfolio page
    // maybe some CV data from linkedin?
    return { };
}) satisfies PageServerLoad;