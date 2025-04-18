import { parseSchema } from './parseSchema';

export const parseSchemas = (schemas) =>
  Object.keys(schemas).map((schemaName) => parseSchema(schemaName, schemas));
