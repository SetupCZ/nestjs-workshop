import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { RedisCacheService } from '../redis-cache/redis-cache.service';

@Controller('cats')
@UseInterceptors(CacheInterceptor)
export class CatsController {
  constructor(
    @Inject(CatsService) private catsService: CatsService,
    @Inject(RedisCacheService) private redisCacheService: RedisCacheService
  ) {}

  @Get()
  async findAll(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('This action returns all cats');
      }, 3000);
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    console.log('id', id);
    return this.catsService.getCat(id);
  }

  @Post(':id')
  create(@Param('id') id: string): string {
    return `This action creates a cat with id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: unknown): string {
    console.log(body);
    return `This action updates a cat with id ${id}`;
  }

  @Post('find/:query')
  async find(@Param('query') query: string): Promise<string> {
    return this.redisCacheService.get(this.catsService.find, [query]);
  }
}
