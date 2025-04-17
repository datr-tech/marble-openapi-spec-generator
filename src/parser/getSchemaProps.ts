export const getSchemaProps = (schema, pathParamName) =>
  Object.keys(schema).reduce((acc, propName) => {
    if (propName == pathParamName) {
      return acc;
    }

    const prop = schema[propName];

    if (typeof prop.in !== 'undefined') {
      delete prop.in;
    }

    if (typeof prop.isString != 'undefined') {
      delete prop.isString;
      prop.type = 'string';
    }

    if (typeof prop.isLength != 'undefined') {
      if (typeof prop.isLength.options !== 'undefined') {
        if (typeof prop.isLength.options.min !== 'undefined') {
          prop.minLength = prop.isLength.options.min;
        }
        if (typeof prop.isLength.options.max !== 'undefined') {
          prop.maxLength = prop.isLength.options.max;
        }

        if (prop.minLength == 8 && typeof prop.maxLength === 'undefined') {
          prop.maxLength = 20;
        }
      }
      delete prop.isLength;
    }

    if (typeof prop.notEmpty !== 'undefined') {
      prop.required = true;
      delete prop.notEmpty;
    }

    if (typeof prop.optional !== 'undefined') {
      prop.required = false;
      delete prop.optional;
    }

    if (typeof prop.isMongoId !== 'undefined') {
      prop.type = 'string';
      prop.pattern = '^[0-9a-fA-F]{24}$';
      delete prop.isMongoId;
    }

    acc[propName] = prop;

    return acc;
  }, {});
