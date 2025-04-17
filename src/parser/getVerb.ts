import { httpVerbForms } from '@app/config';

export const getVerb = (schemaName, verbFormType = 'http', verbForms = httpVerbForms) =>
  verbForms.reduce((acc, verbForm) => {
    if (acc == '' && schemaName.includes(verbForm.path)) {
      acc = verbForm[verbFormType];
    }

    return acc;
  }, '');
