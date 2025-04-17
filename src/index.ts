import { logger } from '@freight/common-logger';
import { schemasPerService } from '@freight/services-schemas';
import { generator } from './generator';
import { parser } from './parser';

schemasPerService.forEach((schemasDef) => {
  const { schemas } = schemasDef;
  const parsedSchemas = parser.parseSchemas(schemas);

  const generatedObj = generator.generateFromParsedSchemas(parsedSchemas);
  logger.info({ generatedObj });
});
