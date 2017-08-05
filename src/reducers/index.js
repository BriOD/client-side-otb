import { reducer as formReducer } from 'redux-form';
import MenuItemsReducer from './menuItemsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  menuItems: MenuItemsReducer,
  form: formReducer
});

export default rootReducer;
