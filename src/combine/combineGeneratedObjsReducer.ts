export const combineGeneratedObjsReducer = (acc, generatedObj) => {
  const { component, paths } = generatedObj;
  let componentJson = {};
  let pathsJson = {};

  if (component !== '') {
    componentJson = JSON.parse(component);
  }

  if (paths !== '') {
    pathsJson = JSON.parse(paths);
  }

  if (
    typeof componentJson['components'] !== 'undefined' &&
    componentJson['components']['schemas'] !== 'undefined'
  ) {
    acc['components']['schemas'] = Object.assign(
      acc['components']['schemas'],
      componentJson['components']['schemas'],
    );
  }

  if (typeof pathsJson['paths'] !== 'undefined') {
    acc['paths'] = Object.assign(acc['paths'], pathsJson['paths']);
  }

  return acc;
};
