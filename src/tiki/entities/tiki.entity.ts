export class Tiki {
  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public status: Status,
  ) {}
}

export enum Status {
  pending = 'pending',
  completed = 'completed',
}

export interface IQueryTiki {
  page: number;
  limit: number;
  search?: string;
}

export interface ICar {
  code: number;
  name: string;
}
