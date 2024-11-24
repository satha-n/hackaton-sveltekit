import type { PageLoad } from './$types';
import { transactions } from '../../data';

export const load = (async () => {
    return {};
}) satisfies PageLoad;

export const _data = transactions;