export const generateComponentsElement = ({ schemaRefName, schemaPropsStr }) => {
  return `
		{
			"components": {
				"schemas": {
					"${schemaRefName}": {
						"type": "object",
						"properties": ${schemaPropsStr}
					}
				} 
			}
		}
	`;
};
