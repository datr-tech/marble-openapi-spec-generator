export const getPathParamName = (endpointName, pathVerb) =>
  pathVerb != 'Create' ? endpointName + 'Id' : null;
