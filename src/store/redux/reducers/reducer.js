import * as Action from '../actions/action';
import {createReducer} from 'redux-act';


 const reducer = createReducer(

    {
      [Action.updateNames]: (state,names) => ({
        ...state,
        // zekr: state.zekr.splice(0,state.zekr.length),
        name:names,
      }),
    }
   ,
    {
        name:[],
       
    }
 );
export default reducer;
