import { openApiSpecFileName } from '@app-mosg/config';
import { generator } from '@app-mosg/generator';
import { paths } from '@app-mosg/paths';
import * as schemas from '@datr.tech/cargo-router-validation-schemas';
import { fsDir, fsFile } from '@datr.tech/marble-generator-file-system-components';
import fs from 'node:fs';

Object.keys(schemas).forEach((serviceName) => {
  const schemasPerService =
    typeof schemas[serviceName] !== 'undefined' ? schemas[serviceName] : {};

  const openApiBody = generator.generateBody(schemasPerService);
  const openApiHeaderData = generator.generateHeaderData(serviceName);
  const openApiHeader = generator.generateHeader(openApiHeaderData);
  const openApiSpec = { ...JSON.parse(openApiHeader), ...openApiBody };

  const publicDirPath = paths.deriveApiPublicDirPath(serviceName);
  if (!fs.existsSync(publicDirPath)) {
    fsDir.create(publicDirPath);
  }

  const openApiSpecPath = fsFile.derivePathJson(openApiSpecFileName, publicDirPath);
  fs.writeFileSync(openApiSpecPath, JSON.stringify(openApiSpec), 'utf8');
});
