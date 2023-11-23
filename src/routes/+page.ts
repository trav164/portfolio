import type { PageLoad } from './$types';

interface Project {
    title: string;
    content: string;
    tech: string[];
}

export const load = (async () => {
    const projects = [
        {
            title: 'The Backyard Farm',
            content: 'An author and publishing house creating and distributing childrens books. I was tasked with re-designing and implementing a whole new site to match the feel of the books as well as incorporating mechanisms for the business to sell and distribute their material.',
            tech: ['TS', 'Sveltekit', 'Tailwind', 'Stripe']
        },
        {
            title: 'Password Generator',
            content: 'A simple password generator with custom parameters inspired by a challenge on Frontend Mentor. This project was a collaboration with Amrit Nagi over lunch.',
            tech: ['TS', 'Sveltekit', 'Tailwind']
        }
    ] as Project[];

    return { projects };
}) satisfies PageLoad;