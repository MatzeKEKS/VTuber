import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return cat; // zurückgeben, was gespeichert wurde
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
