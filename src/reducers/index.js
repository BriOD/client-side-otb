import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MenuItemsReducer from './menuItemsReducer'

const rootReducer = combineReducers({
  menuItems: MenuItemsReducer,
  form: formReducer
});

export default rootReducer;
