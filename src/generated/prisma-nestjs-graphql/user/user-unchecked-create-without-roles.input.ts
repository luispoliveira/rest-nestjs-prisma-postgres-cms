import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { Permissions2UsersUncheckedCreateNestedManyWithoutUserInput } from '../permissions-2-users/permissions-2-users-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutRolesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @HideField()
    isActive?: boolean;

    @HideField()
    resetPasswordToken?: string;

    @HideField()
    resetPasswordExpires?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;

    @HideField()
    permissions?: Permissions2UsersUncheckedCreateNestedManyWithoutUserInput;
}
