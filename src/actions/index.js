import axios from 'axios';
import fetch from 'isomorphic-fetch'


export const FETCH_MENU_ITEMS = 'fetch_menu_items';
export const CREATE_MENU_ITEM = 'create_menu_item';
export const DELETE_MENU_ITEM = 'delete_menu_item';

export function fetchMenuItems() {
  const request = axios.get(`http://localhost:3001/api/menu_items`)


  return {
    type:  FETCH_MENU_ITEMS,
    payload: request
  };
}

export function createMenuItem(values, callback) {
  const request = axios.post(`http://localhost:3001/api/menu_items`, values)
    .then(() => callback());

  return {
    type: CREATE_MENU_ITEM,
    payload: request
  }
}

export function deleteMenuItem(id) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const request = fetch(`http://localhost:3001/api/menu_items/${id}`, {
    method: 'DELETE',
    headers: headers
  })

  return {
    type: DELETE_MENU_ITEM,
    payload: id
  }
}
