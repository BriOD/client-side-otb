import _ from 'lodash';
import { FETCH_MENU_ITEMS, DELETE_MENU_ITEM } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENU_ITEMS:
      return _.mapKeys(action.payload.data, 'id');

    case DELETE_MENU_ITEM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
