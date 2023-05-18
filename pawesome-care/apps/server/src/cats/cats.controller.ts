import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a cat with id ${id}`;
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
