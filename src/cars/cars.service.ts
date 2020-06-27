import { Injectable } from '@nestjs/common';
import { Cars } from './interfaces/cars.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {CarType} from './dto/cars.dto';
import {CarInput} from './dto/cars.input';


@Injectable()
export class CarsService {
  constructor(@InjectModel('car') private readonly carModel: Model<Cars>) {}

  async findAll(): Promise<CarType[]> {
   return await this.carModel.find().exec();
  }

  async create(car: CarInput): Promise<CarType> {
    const createdItem = new this.carModel(car);
    return await createdItem.save();
   }
  


}