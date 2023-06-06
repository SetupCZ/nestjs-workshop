import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from '../cats/cats.module';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CatsModule, RedisCacheModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
