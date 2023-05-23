import { Inject, Injectable } from '@nestjs/common';
import { IStorage, StorageSymbol } from '../storage/storage.interface';

@Injectable()
export class CatsService {
  constructor(@Inject(StorageSymbol) private storage: IStorage) {}

  async getCat(id: string): Promise<string> {
    return await this.storage.get(id);
  }

  async find(query: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`This action found a cat by searching ${query}`);
      }, 3000);
    });
  }
}
