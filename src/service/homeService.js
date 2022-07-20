import * as UserAction from '../store/redux/actions/action';
import {store} from '../store/redux/stores/store';

const namesUpdate = data => {
    const {dispatch} = store;
    dispatch(UserAction.updateNames(data));
  };
//   const toolsDecrement = data => {
//     const {dispatch} = store;
//     dispatch(UserAction.decrementTools(data));
//   };
//   const updateTools = data => {
//     const {dispatch} = store;
//     dispatch(UserAction.updateTools(data));
//   };

const getNames = () => {
  return store.getState().name;
};

export {getNames,namesUpdate };
