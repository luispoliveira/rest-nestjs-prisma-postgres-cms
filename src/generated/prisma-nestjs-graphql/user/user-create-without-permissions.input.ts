import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { Roles2UsersCreateNestedManyWithoutUserInput } from '../roles-2-users/roles-2-users-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutPermissionsInput {

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
    roles?: Roles2UsersCreateNestedManyWithoutUserInput;
}
