
import { Action } from '@ngrx/store';
import { ContactItem } from '../models/contact-item.model';

export enum ContactActionTypes {
  ADD_ITEM = '[CONTACT] Add Item',
  DELETE_ITEM = '[CONTACT] Delete Item'
}

export class AddItemAction implements Action {
  readonly type = ContactActionTypes.ADD_ITEM

  constructor(public payload: ContactItem) { }
}

export class DeleteItemAction implements Action {
  readonly type = ContactActionTypes.DELETE_ITEM

  constructor(public payload: string) { }
}

export type ContactAction = AddItemAction | DeleteItemAction
