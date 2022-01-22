import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutPermissionsInput } from '../role/role-update-one-required-without-permissions.input';

@InputType()
export class Permissions2RolesUpdateWithoutPermissionInput {

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionsInput;
}
