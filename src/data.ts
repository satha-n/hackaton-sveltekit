export const transactions: Form[] = [
    {
        formId: 1, // guid
        formName: 'DND-663', // title
        formDescription: "Rapport d'accident", // description
        formStatus: 0, // status 0: À signer, 1: Signé, 2: En attente
        formDate: '2021-09-01', // date
        assignedSection: 2, // section que le user qui request doit remplir
        form: [
            {
                section: 1, // section du formulaire
                status: 0, // status 0: Pas touche, 1: Assigné
                fields: [
                    {fieldId: 1, fr: 'Nom', en: 'Last Name', fieldStatus: 0, type: 'LASTNAME', fieldType: "input", fieldPrefill: 'John Doe', fieldRequired: true},
                    {fieldId: 2, fr: 'Prénom', en: 'First Name', fieldStatus: 0, type: 'FIRSTNAME', fieldType: "input", fieldPrefill: 'John Doe', fieldRequired: true},
                    {fieldId: 3, fr: 'Date de naissance', en: 'Date of Birth', fieldStatus: 0, type: 'DATE', fieldType: "input", fieldPrefill: '2021-09-01', fieldRequired: true},
                    {fieldId: 4, fr: 'Adresse', en: 'Address', fieldStatus: 0, type: 'ADDRESS', fieldType: "input", fieldPrefill: '123 rue de la rue', fieldRequired: true},
                ]
            },
            {
                section: 2,
                status: 1,
                fields: [
                    {fieldId: 5, fr: 'Numéro de téléphone', en: 'Phone Number', fieldStatus: 1, type: 'PHONE', fieldType: "input", fieldPrefill: '123-456-7890', fieldRequired: true},
                    {fieldId: 6, fr: 'Courriel', en: 'Email', fieldStatus: 1, type: 'EMAIL', fieldType: "input", fieldPrefill: 'penis@vagin.com', fieldRequired: true},
                    {fieldId: 7, fr: 'Numéro de sécurité sociale', en: 'Social Security Number', fieldStatus: 1, type: 'SSN', fieldType: "input", fieldPrefill: '123-45-6789', fieldRequired: true},
                    {fieldId: 8, fr: 'Numéro de permis de conduire', en: 'Driver License Number', fieldStatus: 1, type: 'DLN', fieldType: "input", fieldPrefill: '123-45-6789', fieldRequired: true},
                ]
            },
        ]
    },
    {
        formId: 2, // guid
        formName: 'DND-664', // title
        formDescription: "Rapport d'accident", // description
        formStatus: 0, // status 0: À signer, 1: Signé, 2: En attente
        formDate: '2021-09-01', // date
        assignedSection: 2, // section que le user qui request doit remplir
        form: [
            {
                section: 1, // section du formulaire
                status: 0, // status 0: Pas touche, 1: Assigné
                fields: [
                    {fieldId: 1, fr: 'Nom', en: 'Last Name', fieldStatus: 0, type: 'LASTNAME', fieldType: "input", fieldSubType: "text", fieldPrefill: 'John Doe', fieldRequired: true},
                    {fieldId: 2, fr: 'Prénom', en: 'First Name', fieldStatus: 0, type: 'FIRSTNAME', fieldType: "input", fieldSubType: "text", fieldPrefill: 'John Doe', fieldRequired: true},
                    {fieldId: 3, fr: 'Date de naissance', en: 'Date of Birth', fieldStatus: 0, type: 'DATE', fieldType: "input", fieldSubType: "date", fieldPrefill: '2021-09-01', fieldRequired: true},
                    {fieldId: 4, fr: 'Adresse', en: 'Address', fieldStatus: 0, type: 'ADDRESS', fieldType: "input", fieldSubType: "text", fieldPrefill: '123 rue de la rue', fieldRequired: true},
                ]
            },
            {
                section: 2,
                status: 1,
                fields: [
                    {fieldId: 5, fr: 'Numéro de téléphone', en: 'Phone Number', fieldStatus: 0, type: 'PHONE', fieldType: "input", fieldSubType: "text", fieldPrefill: '123-456-7890', fieldRequired: true},
                    {fieldId: 6, fr: 'Courriel', en: 'Email', fieldStatus: 0, type: 'EMAIL', fieldType: "input", fieldSubType: "number", fieldPrefill: 'penis@vagin.com', fieldRequired: true},
                    {fieldId: 7, fr: 'Numéro de sécurité sociale', en: 'Social Security Number', fieldStatus: 0, type: 'SSN', fieldType: "input", fieldSubType: "text", fieldPrefill: '123-45-6789', fieldRequired: true},
                    {fieldId: 8, fr: 'Numéro de permis de conduire', en: 'Driver License Number', fieldStatus: 0, type: 'DLN', fieldType: "input", fieldSubType: "text", fieldPrefill: '123-45-6789', fieldRequired: true},
                ]
            },
        ]
    },
]
    