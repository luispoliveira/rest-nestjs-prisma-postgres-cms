import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @HideField()
    isActive?: true;

    @HideField()
    resetPasswordToken?: true;

    @HideField()
    resetPasswordExpires?: true;

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
