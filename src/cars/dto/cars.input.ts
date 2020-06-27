import { Field,Int,InputType } from '@nestjs/graphql';


@InputType()
export class CarInput {
  @Field()
    readonly brand: string;

  @Field()
    readonly name: string;

  @Field(() => Int)
    readonly year : number;
}
