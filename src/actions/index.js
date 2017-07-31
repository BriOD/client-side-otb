import axios from 'axios';

export const FETCH_MENU_ITEMS = 'fetch_menu_items';

export function fetchMenuItems() {
  const request = axios.get(`http://localhost:3001/api/menu_items`)


  return {
    type:  FETCH_MENU_ITEMS,
    payload: request
  };
}
