# Redis cheatsheet
- Install packages `npm i @nestjs/cache-manager cache-manager cache-manager-redis-yet`
- Init docker redis container `docker compose -f docker-compose-redis-only.yml up`
- Define __redisStore__ settings in env `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`, `REDIS_TTL` 
- Generate module redis-cache `nx g module redis-cache`
- Register a __CacheModule__ in the module `imports: [CacheModule.registerAsync(/* ... */)]`
  - Don't forget to import __ConfigModule__ and inject __ConfigService__ 
- Define redisStore settings 
- Provide __CacheInterceptor__ in the module `providers: [{ provide: APP_INTERCEPTOR, useClass: CacheInterceptor }]`
- Make module @Global, Make CacheModule isGlobal
- `@UseInterceptors(CacheInterceptor)` in cats controller to automatically cache get requests 
- Demonstrate caching with timeout in controller

## Manual caching
- Generate service `nx g service redis-cache`
- Import and export it to redis-cache module 
  - `providers: [RedisCacheService]`
  - `exports: [RedisCacheService]`
- Implement __get method__ `get<Args extends unknown[], Result>(method: (...args: Args) => Promise<Result>, args: Args): Promise<Result>`
  - Get from cache by key 
  - Set to cache if not found
- __Inject__ into cats controller
- Update find method in __cats.service__ to be promise with __timeout__
- __Wrap__ find method with redis cache get method in __controller__ 
- Demonstrate caching with timeout in controller
