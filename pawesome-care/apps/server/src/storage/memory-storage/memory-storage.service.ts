import { Injectable } from '@nestjs/common';
import { IStorage } from '../storage.interface';

@Injectable()
export class MemoryStorageService implements IStorage {
  private storage = new Map<string, string>();

  async get(key: string): Promise<string> {
    return this.storage.get(key);
  }

  async set(key: string, value: string): Promise<void> {
    this.storage.set(key, value);
  }
}
