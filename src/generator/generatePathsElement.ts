export const generatePathsElement = ({ endpointName, endpointSignature, httpVerb, operationId, pathParam, pathVerb, schemaRefName }) => {
  if (httpVerb == 'get' || httpVerb == 'delete') {
    return `
			{
				"paths": {
					"/${endpointSignature}": {
						"${httpVerb}": {
							"tags": [
								"${endpointName}"
							],
							"summary": "${pathVerb} ${endpointName}",
							"operationId": "${operationId}",
							"parameters": [
								{
									"in": "path",
									"name": "${pathParam}",
									"required": true,
									"schema": {
										"type": "string",
										"pattern": "^[0-9a-fA-F]{24}$"
									}
								}
							]
						}
					}
				}
			}`;
  } else {
    return `
			{
				"paths": {
					"/${endpointSignature}": {
						"${httpVerb}": {
							"tags": [
								"${endpointName}"
							],
							"summary": "${pathVerb} ${endpointName}",
							"operationId": "${operationId}",
							"requestBody": {
								"content": {
									"application/json": {
										"schema": {
											"$ref": "#/components/schemas/${schemaRefName}"
										}
									}
								}
							}
						}
					}
				}
			}`;
  }
};
