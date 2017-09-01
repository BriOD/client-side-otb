import { FETCH_MENU_ITEMS, DELETE_MENU_ITEM, UPDATE_LIKES } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENU_ITEMS:
    const sortedArray = action.payload.data.sort((a, b) => {
      return b.likes - a.likes
    });
      return sortedArray;

    case DELETE_MENU_ITEM:
      const newState = Object.assign([], state);
      const indexToDelete = state.findIndex(item => {return item.id === action.payload});
      newState.splice(indexToDelete, 1);
      return newState;

    case UPDATE_LIKES:
      const updatedItems = state.map(i => {
        // console.log(i)
        if(i.id === action.payload.data.id){
          return action.payload.data
        }
        return i
      })
        return updatedItems
      // const filteredState = state.filter(item => item.id !== action.payload.data.id)
      // return [ ...filteredState, action.payload.data,... ];
      // 1. take original state
      // 2. find the index to update
      // 3. slice from beginning of state up to the index butnot including
      // 4. slice from index after updated index to the end
      // 5. [...arrayFromStep3, updatedItem from action, ...arrayFromStep4]
      //
      // 1. Do steps 1-3 from above
      // 2. concat new item from payload
      // 3. concat end of array


    default:
      return state;
  }
}
