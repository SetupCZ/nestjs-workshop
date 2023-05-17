# Dependency Injection Cheatsheet
- Generate storage module `nx g module storage`
- Generate storage interface `nx g interface storage/storage`
- Generate memory and postgres storage providers <br>`nx g service storage/memory-storage` and `nx g service storage/postgre-sql`
- Both providers implement `Storage` interface
- Add `StorageModule` to `AppModule` imports

## Providers registration
- Service as is: `providers: [MemoryStorage]` & `exports: [MemoryStorage]`
- With specified `provide`: `providers: [{ provide: 'STORAGE', useClass: MemoryStorage }]` & `exports: ['STORAGE']`
- With factory: `providers: [{ provide: 'STORAGE', useFactory: () => { /* ... */ } }]` & `exports: ['STORAGE']`

## Dependency injection
- Inject `Storage` into `CatsService` constructor with a Symbol
- Change env variable to switch between memory and postgres storage
