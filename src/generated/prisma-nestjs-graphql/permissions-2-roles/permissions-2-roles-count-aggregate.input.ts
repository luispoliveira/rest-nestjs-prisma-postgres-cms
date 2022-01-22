import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class Permissions2RolesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    permissionId?: true;

    @Field(() => Boolean, {nullable:true})
    roleId?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    createdBy?: true;

    @HideField()
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
