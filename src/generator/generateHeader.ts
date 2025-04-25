import { fsTemplate } from '@datr.tech/marble-generator-file-system-components';

export const generateHeader = (headerData) =>
  fsTemplate.getContents('openApiHeaderTemplate', headerData);
