import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PermissionUpdateOneRequiredWithoutUsersInput } from '../permission/permission-update-one-required-without-users.input';
import { UserUpdateOneRequiredWithoutPermissionsInput } from '../user/user-update-one-required-without-permissions.input';

@InputType()
export class Permissions2UsersUpdateInput {

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateOneRequiredWithoutUsersInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutUsersInput;

    @Field(() => UserUpdateOneRequiredWithoutPermissionsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPermissionsInput;
}
