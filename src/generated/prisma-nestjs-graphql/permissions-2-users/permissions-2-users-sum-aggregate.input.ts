import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class Permissions2UsersSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    permissionId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
