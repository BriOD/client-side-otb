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

    case UPDATE_LIKES:
      // console.log(action.payload.data)
      // console.log(state)
      // const menuItem = state.filter(item => item.id === action.payload.data.id)
      // const index = state.findIndex(item => item.id === action.payload.data.id)
      // const updatedMenuItem = Object.assign({}, menuItem, action.payload.data)
      // return Object.assign([], state, state[index] = updatedMenuItem)
      return [
        ...state.filter(item => item.id !== action.payload.data.id),
        Object.assign({}, action.payload.data)
      ]



      // return [
      //     ...state.filter(cat => cat.id !== action.cat.id),
      //     Object.assign({}, action.cat)
      //   ]


  //     case 'EDIT_APPLICATION':
  // const application = state.applications.filter(a => a.id === action.application.id)[0]
  // const index = state.applications.findIndex(a => a.id === action.application.id)
  // const editedApplication = Object.assign({}, application, action.application)
  // return {
  //   applications: [
  //         ...state.applications.slice(0, index),
  //         editedApplication,
  //         ...state.applications.slice(index + 1)
  //       ],
  //       currentApplication: {}
  //   }

      // const itemToUpdate = state.find(item => {return item.id === action.payload});
      // const updateItem = Object.assign({}, itemToUpdate, itemToUpdate.likes += 1 );



      // const newState = Object.assign()

    default:
      return state;
  }
}
