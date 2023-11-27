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
            content: 'I worked with a childrens book author and publishing house, where my role involved giving their website a complete makeover. I aimed to reflect the vibe of their books while also setting up practical systems for selling and distributing their materials.',
            tech: ['TS', 'Sveltekit', 'Tailwind', 'Stripe'],
            link: 'https://thebackyardfarm.co.uk/',
        },
        {
            title: 'Password Generator',
            content: 'I whipped up a straightforward password generator with personalized settings, inspired by a challenge on Frontend Mentor. This little project turned out to be a collaborative effort with Amrit Nagi, hashed out over lunch.',
            tech: ['TS', 'Sveltekit', 'Tailwind'],
            link: 'https://password.lewistravis.co.uk/'
        },
        {
            title: 'Spot The Intro',
            content: 'I spiced up the Spot The Intro game from Cheatwell Games by adding a nifty automation feature to the song-searching process. My project centered around crafting a third-party app that does the heavy lifting, automatically searching for songs using the game cards. No more manual searches on their website – just a more streamlined and innovative gaming experience.',
            tech: ['TS', 'Sveltekit', 'Tailwind', 'Cloudlfare Workers', 'Supabase', 'Vercel'],
            link: 'https://spot-the-intro.lewistravis.co.uk/',
        }
    ] as Project[];

    return { projects };
}) satisfies PageLoad;