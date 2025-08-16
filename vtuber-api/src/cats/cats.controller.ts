import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/require-await
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  // eslint-disable-next-line @typescript-eslint/require-await
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
