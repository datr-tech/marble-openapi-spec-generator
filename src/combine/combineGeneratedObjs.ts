import { combineGeneratedObjsReducer } from './combineGeneratedObjsReducer';

export const combineGeneratedObjs = (generatedObjs) =>
  generatedObjs.reduce(combineGeneratedObjsReducer, {
    components: {
      schemas: {},
    },
    paths: {},
  });
