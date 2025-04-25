import { commonRoot } from '@app-mosg/config';
import path from 'node:path';

export const deriveApiPackageJsonPath = (serviceName) =>
  path.resolve(commonRoot, `api-${serviceName}`, 'package.json');
