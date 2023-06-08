import { TableInterface } from 'interfaces/table';
import { WaiterInterface } from 'interfaces/waiter';
import { OrganizationInterface } from 'interfaces/organization';

export interface RestaurantInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: Date;
  updated_at?: Date;
  table?: TableInterface[];
  waiter?: WaiterInterface[];
  organization?: OrganizationInterface;
  _count?: {
    table?: number;
    waiter?: number;
  };
}
