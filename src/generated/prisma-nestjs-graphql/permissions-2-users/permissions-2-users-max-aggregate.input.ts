import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class Permissions2UsersMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    permissionId?: true;

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
