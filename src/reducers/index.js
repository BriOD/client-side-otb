import { reducer as formReducer } from 'redux-form';
import MenuItemsReducer from './menuItemsReducer';
import authenticationReducer from './authentication';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  menuItems: MenuItemsReducer,
  form: formReducer,
  authenticated: authenticationReducer
});

export default rootReducer;
