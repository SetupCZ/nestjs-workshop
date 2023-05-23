import { Injectable } from '@nestjs/common';
import { IStorage } from '../storage.interface';

@Injectable()
export class PostgreSqlService implements IStorage {
  async get(key: string): Promise<string> {
    return 'PostgreSqlService.get()';
  }

  async set(key: string, value: string): Promise<void> {
    console.log('PostgreSqlService.set()');
  }
}
