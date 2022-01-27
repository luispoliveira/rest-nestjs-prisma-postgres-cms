import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LogAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
