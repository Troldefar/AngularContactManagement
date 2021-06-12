import { ContactActionTypes, ContactAction } from '../actions/contact.actions';
import { ContactItem } from '../models/contact-item.model';


const initialState: Array<ContactItem> = [];

export function ContactsReducer(state: Array<ContactItem> = initialState, action: ContactAction) {
  switch (action.type) {
    case ContactActionTypes.ADD_ITEM:
      console.log("item added: ", action);
      return [...state, action.payload];
    case ContactActionTypes.DELETE_ITEM:
      return state.filter(item => item.firstName !== action.payload);
    default:
      return state;
  }
}