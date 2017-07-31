import _ from 'lodash';
import { FETCH_MENU_ITEMS } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENU_ITEMS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
