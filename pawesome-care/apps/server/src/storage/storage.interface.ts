export const StorageSymbol = Symbol('IStorage');

export interface IStorage {
  get(key: string): Promise<string>;
  set(key: string, value: string): Promise<void>;
}
