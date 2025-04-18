export const getSchemaRefName = (endpointName, pathVerb) =>
  endpointName.charAt(0).toUpperCase() + endpointName.slice(1) + pathVerb;
