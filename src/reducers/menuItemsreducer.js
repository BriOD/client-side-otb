import { FETCH_MENU_ITEMS, DELETE_MENU_ITEM, UPDATE_LIKES } from '../actions'

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

    // case UPDATE_LIKES:
      // console.log(state)
      // const itemToUpdate = state.find(item => {return item.id === action.payload});
      // const updateItem = Object.assign({}, itemToUpdate, itemToUpdate.likes += 1 );



      // const newState = Object.assign()

    default:
      return state;
  }
}
