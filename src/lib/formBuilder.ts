export function formBuilder(data: Form): string {
    let html = '';

    data.form.forEach(section => {
        html += `<div class="section" id="section-${section.section}">`;
        html += `<h2>Section ${section.section}</h2>`;

        section.fields.forEach(field => {
            html += `<div class="field" id="field-${field.fieldId}">`;
            html += `<label for="field-${field.fieldId}">${field.fr} / ${field.en}</label>`;
            html += `<input type="${field.fieldSubType}" id="field-${field.fieldId}" value="${field.fieldPrefill}" ${field.fieldRequired ? 'required' : ''} ${field.fieldStatus === 0 ? 'disabled' : ''} />`;
            html += `</div>`;
        });

        html += `</div>`;
    });

    return html;
}