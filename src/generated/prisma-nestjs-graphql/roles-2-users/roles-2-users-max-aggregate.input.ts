import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class Roles2UsersMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    roleId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    createdBy?: true;

    @HideField()
    updatedBy?: true;
}
