import { commonRoot } from '@app-mosg/config';
import path from 'node:path';

export const deriveApiPublicDirPath = (serviceName) =>
  path.resolve(commonRoot, `api-${serviceName}`, 'public');
