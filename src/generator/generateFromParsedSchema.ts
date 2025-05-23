import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';
import { generatePathsElement } from './generatePathsElement';

export const generateFromParsedSchema = (parsedSchema) => {
  const component = fsTemplate.getContents(
    'openApiComponentsElementTemplate',
    parsedSchema,
  );
  const paths = generatePathsElement(parsedSchema);

  return {
    component,
    paths,
  };
};
