import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { Permissions2UsersUncheckedUpdateManyWithoutPermissionInput } from '../permissions-2-users/permissions-2-users-unchecked-update-many-without-permission.input';
import { Permissions2RolesUncheckedUpdateManyWithoutPermissionInput } from '../permissions-2-roles/permissions-2-roles-unchecked-update-many-without-permission.input';

@InputType()
export class PermissionUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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
    users?: Permissions2UsersUncheckedUpdateManyWithoutPermissionInput;

    @HideField()
    roles?: Permissions2RolesUncheckedUpdateManyWithoutPermissionInput;
}
