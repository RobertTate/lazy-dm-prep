import Dexie, { Table } from 'dexie';

interface Campaign {
  id?: number;
  name: string;
  isSelected: string;
}

class AppDB extends Dexie {
  campaigns!: Table<Campaign>

  constructor() {
    super('appDB');
  }
}

export const appDB: AppDBInterface = new AppDB();
export type AppDBInterface = InstanceType<typeof AppDB>
