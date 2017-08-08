import _ from 'lodash';
import { FETCH_MENU_ITEMS, DELETE_MENU_ITEM } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENU_ITEMS:
      return action.payload.data;

    case DELETE_MENU_ITEM:
    // console.log(action)

      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(item => {return item.id === action.payload});
      // console.log(indexToDelete)
      newState.splice(indexToDelete, 1);
      return newState;

      // return _.omit(state, action.payload);
      // return Object.assign({}, state)

    default:
      return state;
  }
}



// case types.DELETE_CAT_SUCCESS: {
//   const newState = Object.assign([], state);
//   const indexOfCatToDelete = state.findIndex(cat => {return cat.id == action.cat.id})
//   newState.splice(indexOfCatToDelete, 1);
//   browserHistory.push('/cats');
//   return newState;
// }
