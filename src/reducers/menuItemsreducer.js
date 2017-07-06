import { FETCH_MENU_ITEMS } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MENU_ITEMS:

    default:
      return state;
  }
}
