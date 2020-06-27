import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CarType } from './dto/cars.dto';
import {CarInput} from './dto/cars.input';

@Resolver(() => CarType)
export class CarsResolver {
  constructor(private readonly itemsService: CarsService) {}

  @Query(() => [CarType])
  async items(): Promise<CarType[]> {
    return this.itemsService.findAll();
  }

  @Mutation(() => CarType)
  async createItem(@Args('input') input: CarInput) : Promise<CarType> {
    return this.itemsService.create(input);
  }

}