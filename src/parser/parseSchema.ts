import { getEndpointName } from './getEndpointName';
import { getEndpointSignature } from './getEndpointSignature';
import { getOperationId } from './getOperationId';
import { getPathParamName } from './getPathParamName';
import { getSchemaProps } from './getSchemaProps';
import { getSchemaRefName } from './getSchemaRefName';
import { getVerb } from './getVerb';

export const parseSchema = (schemaName, schemas) => {
  const schema = schemas[schemaName];
  const endpointName = getEndpointName(schemaName);
  const httpVerb = getVerb(schemaName, 'http');
  const pathVerb = getVerb(schemaName, 'path');
  const pathParamName = getPathParamName(endpointName, pathVerb);
  const endpointSignature = getEndpointSignature(endpointName, pathParamName);
  const operationId = getOperationId(endpointName, pathVerb);
  const schemaRefName = getSchemaRefName(endpointName, pathVerb);
  const schemaProps = getSchemaProps(schema, pathParamName);
  const schemaPropsStr = JSON.stringify(schemaProps);

  return {
    endpointName,
    endpointSignature,
    httpVerb,
    operationId,
    pathParamName,
    pathVerb,
    schemaProps,
    schemaPropsStr,
    schemaRefName,
  };
};
