import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ request, locals: { getSession, supabase } }) => {
	const session = await getSession();

	if (!session && request.url.includes('/app')) {
		redirect(307, '/auth');
	}

	return {
		session,
	};
};
