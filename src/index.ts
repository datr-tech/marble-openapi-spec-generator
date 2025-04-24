import { combine } from '@app-mosg/combine';
import { openApiSpecFileName } from '@app-mosg/config';
import { generator } from '@app-mosg/generator';
import { parser } from '@app-mosg/parser';
import { paths } from '@app-mosg/paths';
import * as schemas from '@datr.tech/cargo-router-validation-schemas';
import { fsDir, fsFile } from '@datr.tech/marble-generator-file-system-components';
import fs from 'node:fs';

Object.keys(schemas).forEach((serviceName) => {
  const schemasPerService =
    typeof schemas[serviceName] !== 'undefined' ? schemas[serviceName] : {};

  const parsedSchemas = parser.parseSchemas(schemasPerService);
  const generatedObjs = generator.generateFromParsedSchemas(parsedSchemas);
  const openApiSpec = combine.generatedObjs(generatedObjs);
  const publicDirPath = paths.deriveApiPublicDirPath(serviceName);

  if (!fs.existsSync(publicDirPath)) {
    fsDir.create(publicDirPath);
  }

  const openApiSpecPath = fsFile.derivePathJson(openApiSpecFileName, publicDirPath);

  fs.writeFileSync(openApiSpecPath, JSON.stringify(openApiSpec), 'utf8');
});
