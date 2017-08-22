import { FETCH_MENU_ITEMS, DELETE_MENU_ITEM, UPDATE_LIKES } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENU_ITEMS:
      return action.payload.data;

    case DELETE_MENU_ITEM:
      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(item => {return item.id === action.payload});
      newState.splice(indexToDelete, 1);
      return newState;

    case UPDATE_LIKES:
      const filteredState = state.filter(item => item.id !== action.payload.data.id)
      return [ ...filteredState, action.payload.data ];


    default:
      return state;
  }
}
