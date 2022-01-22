import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class Roles2UsersAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    roleId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
