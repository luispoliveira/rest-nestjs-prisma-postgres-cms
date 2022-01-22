import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @HideField()
    password?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @HideField()
    resetPasswordToken?: string;

    @HideField()
    resetPasswordExpires?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}
