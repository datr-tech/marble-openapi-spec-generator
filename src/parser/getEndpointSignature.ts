export const getEndpointSignature = (endpointName, pathParamName) =>
  pathParamName ? `${endpointName}/:${pathParamName}` : endpointName;
