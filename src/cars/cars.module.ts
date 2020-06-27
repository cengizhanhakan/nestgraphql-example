import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
import { CarsSchema } from './schemas/cars.schema';
import {CarsResolver} from './cars.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name:'car', schema: CarsSchema}])],
  controllers: [],
  providers: [CarsService,CarsResolver],
})
export class CarsModule {}