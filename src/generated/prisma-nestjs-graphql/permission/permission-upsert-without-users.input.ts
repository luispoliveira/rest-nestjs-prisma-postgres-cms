import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateWithoutUsersInput } from './permission-update-without-users.input';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';

@InputType()
export class PermissionUpsertWithoutUsersInput {

    @Field(() => PermissionUpdateWithoutUsersInput, {nullable:false})
    update!: PermissionUpdateWithoutUsersInput;

    @Field(() => PermissionCreateWithoutUsersInput, {nullable:false})
    create!: PermissionCreateWithoutUsersInput;
}
