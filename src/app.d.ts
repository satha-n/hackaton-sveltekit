// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		
	}
	interface Field {
		fieldId: number;
		fr: string;
		en: string;
		fieldStatus: number;
		type: string;
		fieldType: string;
		fieldSubType?: string;
		fieldPrefill: string;
		fieldRequired: boolean;
	}
	
	interface FormSection {
		section: number;
		status: number;
		fields: Field[];
	}
	
	interface Form {
		formId: number;
		formName: string;
		formDescription: string;
		formStatus: number;
		formDate: string;
		assignedSection: number;
		form: FormSection[];
	}
}

export {};
