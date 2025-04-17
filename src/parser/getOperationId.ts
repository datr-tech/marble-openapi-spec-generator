export const getOperationId = (endpointName, pathVerb) =>
  pathVerb.toLowerCase() + endpointName.charAt(0).toUpperCase() + endpointName.slice(1);
