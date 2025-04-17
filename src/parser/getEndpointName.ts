import { getPosFirstCaseChange } from './getPosFirstCaseChange';

export const getEndpointName = (schemaName) => {
  const posCaseChange = getPosFirstCaseChange(schemaName);

  return posCaseChange ? schemaName.slice(0, posCaseChange) : '';
};
