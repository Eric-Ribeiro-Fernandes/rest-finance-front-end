export interface Dividendos {
  schema: Schema;
  data: Datum[];
}

export interface Datum {
  Date: string;
  Dividends: number;
}

export interface Schema {
  fields: Field[];
  primaryKey: string[];
  pandas_version: string;
}

export interface Field {
  name: string;
  type: string;
  tz?: string;
}
