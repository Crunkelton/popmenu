import { MenuItem } from './menu-item';

export interface Menu {
  id: number;
  name: string;
  items: MenuItem[];
}
