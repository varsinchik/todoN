export interface TodoRowItem {
  status: boolean,
  id: number,
  title: string,
  priority: PRIORITY;
}

export enum PRIORITY {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}
