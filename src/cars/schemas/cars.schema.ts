import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
    brand: String,
    name: String,
    year: Number,
  });


