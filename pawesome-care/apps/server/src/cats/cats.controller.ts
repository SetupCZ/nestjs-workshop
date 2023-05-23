import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(@Inject(CatsService) private catsService: CatsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
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
}
