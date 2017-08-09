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

    default:
      return state;
  }
}
