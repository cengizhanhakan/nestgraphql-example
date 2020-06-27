import {Document} from 'mongoose';
export interface Cars extends Document {
    readonly brand: string;
    readonly name: string;
    readonly year: number;
  }


