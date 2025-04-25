import { combine } from '@app-mosg/combine';
import { parser } from '@app-mosg/parser';
import { generateFromParsedSchemas } from './generateFromParsedSchemas';

export const generateBody = (schemasPerService) => {
  const parsedSchemas = parser.parseSchemas(schemasPerService);
  const generatedObjs = generateFromParsedSchemas(parsedSchemas);
  const openApiBody = combine.generatedObjs(generatedObjs);

  return openApiBody;
};
