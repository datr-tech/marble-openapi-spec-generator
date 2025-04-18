import { schemasPerService } from '@datr.tech/cargo-router-validation-schemas';
import { logger } from '@datr.tech/leith-common-logger';
import { generator } from './generator';
import { parser } from './parser';

schemasPerService.forEach((schemasDef) => {
  const schemas =
    typeof schemasDef['schemas'] !== 'undefined' ? schemasDef['schemas'] : {};
  const parsedSchemas = parser.parseSchemas(schemas);

  const generatedObj = generator.generateFromParsedSchemas(parsedSchemas);
  logger.info({ generatedObj });
});
