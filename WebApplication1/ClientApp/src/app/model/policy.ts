export interface IPolicy {
  policyNumber: number;
  policyHolder: IPolicyHolder;
}

export interface IPolicyHolder {
  name: string;
  age: number;
  gender: GenderType;
}

export enum GenderType {
  Male = 0,
  Female = 1,
}
