import {createAction} from 'redux-act';


const getDataList = createAction('getDataList');
const updateNames = createAction('updateNames');

export {
  getDataList,
  updateNames,
};
