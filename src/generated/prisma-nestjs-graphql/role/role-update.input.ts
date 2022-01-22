import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { Roles2UsersUpdateManyWithoutRoleInput } from '../roles-2-users/roles-2-users-update-many-without-role.input';
import { Permissions2RolesUpdateManyWithoutRoleInput } from '../permissions-2-roles/permissions-2-roles-update-many-without-role.input';

@InputType()
export class RoleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    users?: Roles2UsersUpdateManyWithoutRoleInput;

    @HideField()
    permissions?: Permissions2RolesUpdateManyWithoutRoleInput;
}
