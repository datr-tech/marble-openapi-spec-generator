import { paths } from '@app-mosg/paths';
import fs from 'node:fs';

export const generateHeaderData = (serviceName) => {
  const apiPackageJsonPath = paths.deriveApiPackageJsonPath(serviceName);
  const apiPackageJson = fs.readFileSync(apiPackageJsonPath, 'utf8');
  const { description, name, version } = JSON.parse(apiPackageJson);

  return {
    description,
    name,
    version,
  };
};
