import { combineReducers } from 'redux';
import MenuItemsReducer from './menuItemsReducer'

const rootReducer = combineReducers({
  menuItems: MenuItemsReducer
});

export default rootReducer;
