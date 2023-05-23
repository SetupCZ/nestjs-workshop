import { Module } from '@nestjs/common';
import { MemoryStorageService } from './memory-storage/memory-storage.service';
import { PostgreSqlService } from './postgre-sql/postgre-sql.service';
import { StorageSymbol } from './storage.interface';

@Module({
  providers: [
    MemoryStorageService,
    PostgreSqlService,
    {
      provide: StorageSymbol,
      inject: [PostgreSqlService, MemoryStorageService],
      useFactory: (
        postgreSqlService: PostgreSqlService,
        memoryStorageService: MemoryStorageService
      ) => {
        if (process.env.NODE_ENV === 'production') {
          return postgreSqlService;
        } else {
          return memoryStorageService;
        }
      },
    },
  ],
  exports: [StorageSymbol],
})
export class StorageModule {}
