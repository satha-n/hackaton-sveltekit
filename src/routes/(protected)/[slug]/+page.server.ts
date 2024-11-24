import { error } from '@sveltejs/kit';
import {transactions}  from '../../../data';

export function load({ params }) {
	const transaction = transactions.find((tx) => String(tx.formId) === params.slug);

	if (!transaction) error(404);

	return {
		transaction
	};
}