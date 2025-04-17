import { generateFromParsedSchema } from './generateFromParsedSchema';

export const generateFromParsedSchemas = (parsedSchemas) => parsedSchemas.map((parsedSchema) => generateFromParsedSchema(parsedSchema));
