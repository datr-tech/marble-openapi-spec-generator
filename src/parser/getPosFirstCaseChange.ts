export const getPosFirstCaseChange = (schemaName) => {
  const schemaNameUpper = schemaName.toUpperCase();
  let changeFound = false;
  let pos;

  for (pos = 0; pos < schemaName.length; pos++) {
    if (schemaName.charAt(pos) == schemaNameUpper.charAt(pos)) {
      changeFound = true;
      break;
    }
  }

  return changeFound ? pos : null;
};
