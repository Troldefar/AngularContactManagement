import { ContactItem } from './contact-item.model';

export interface AppState {
  readonly contacts: Array<ContactItem>
}