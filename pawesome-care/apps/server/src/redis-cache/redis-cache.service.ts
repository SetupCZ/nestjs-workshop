import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async get<Args extends unknown[], Result>(
    method: (...args: Args) => Promise<Result>,
    args: Args
  ): Promise<Result> {
    const key = JSON.stringify(args);

    const data = await this.cacheManager.get(key);

    if (!data) {
      console.log('Calling method and setting to cache');
      const result = await method(...args);

      await this.cacheManager.set(key, result);

      return result;
    }

    console.log('Getting from redis cache and returning');
    return data as Result;
  }
}
