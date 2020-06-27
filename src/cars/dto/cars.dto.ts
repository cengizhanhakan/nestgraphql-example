import { ObjectType, Field,ID,Int } from '@nestjs/graphql';


@ObjectType()
export class CarType {
  @Field(() => ID)
  readonly id?: string;

  @Field()
    readonly brand: string;

  @Field()
    readonly name: string;

  @Field(() => Int)
    readonly year : number;
  }

