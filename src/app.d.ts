// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			flash?: { type: 'success' | 'error'; message: string };
		}
		// interface Platform {}
	}

	interface SkillDetails {
		title: string;
		description: string;
		icon: string;
		dark?: boolean;
	}
}

export { };
