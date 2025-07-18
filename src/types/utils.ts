import type { ComponentType } from 'react';

export type Diff<T, U> = T extends U ? never : T;

export type FirstArg<T> = T extends ComponentType<infer Props> ? Props : never;

export const checkFields = <T>() => {
  return null as unknown as T;
}; 