import axios from 'axios';
import fetch from 'isomorphic-fetch'


export const FETCH_MENU_ITEMS = 'fetch_menu_items';
export const CREATE_MENU_ITEM = 'create_menu_item';
export const DELETE_MENU_ITEM = 'delete_menu_item';
export const CHANGE_AUTH = 'change_auth';
export const UPDATE_LIKES = 'update_likes'

export function fetchMenuItems() {
  const request = axios.get(`http://localhost:3001/api/menu_items`)


  return {
    type:  FETCH_MENU_ITEMS,
    payload: request
  };
}

export function createMenuItem(values, history) {
  const request = axios.post(`http://localhost:3001/api/menu_items`, values)
    .then(() => history.push('/specials'));

  return {
    type: CREATE_MENU_ITEM,
    payload: request
  }
}

export function deleteMenuItem(id) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  fetch(`http://localhost:3001/api/menu_items/${id}`, {
    method: 'DELETE',
    headers: headers
  });

  return {
    type: DELETE_MENU_ITEM,
    payload: id
  }
}

export function likeMenuItem(id, likes) {

//   patch(url, data ={}, token) {
//   const body = JSON.stringify(data)
//
//   const headers =  {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer: ${token}`
//   }
//
//   return fetch(`${BASE_URL}${url}`, {
//     method: 'PATCH',
//     headers: headers,
//     body: body
//   })
//   .then(parseResponse)
// },

  const request = axios.patch(`http://localhost:3001/api/menu_items/${id}`,{
    likes: likes
  })

  return {
    type: UPDATE_LIKES,
    payload: request
  }
}

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
