import type { PageLoad } from './$types';

interface Project {
    title: string;
    content: string;
    tech: string[];
    link: string;
}

export const load = (async () => {
    const projects = [
        {
            title: 'The Backyard Farm',
            content: 'An author and publishing house creating and distributing childrens books. I was tasked with re-designing and implementing a whole new site to match the feel of the books as well as incorporating mechanisms for the business to sell and distribute their material.',
            tech: ['TS', 'Sveltekit', 'Tailwind', 'Stripe'],
            link: 'https://thebackyardfarm.co.uk/',
        },
        {
            title: 'Password Generator',
            content: 'A simple password generator with custom parameters inspired by a challenge on Frontend Mentor. This project was a collaboration with Amrit Nagi over lunch.',
            tech: ['TS', 'Sveltekit', 'Tailwind'],
            link: 'https://password.lewistravis.co.uk/'
        },
        {
            title: 'Spot The Intro',
            content: 'Enhancing Spot The Intro game created by Cheatwell Games by automating song searching.',
            tech: ['TS', 'Sveltekit', 'Tailwind', 'Cloudlfare Workers', 'Supabase', 'Vercel'],
            link: 'https://spot-the-intro.lewistravis.co.uk/',
        }
    ] as Project[];

    return { projects };
}) satisfies PageLoad;