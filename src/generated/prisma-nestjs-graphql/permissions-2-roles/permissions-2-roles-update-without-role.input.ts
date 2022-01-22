import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PermissionUpdateOneRequiredWithoutRolesInput } from '../permission/permission-update-one-required-without-roles.input';

@InputType()
export class Permissions2RolesUpdateWithoutRoleInput {

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateOneRequiredWithoutRolesInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutRolesInput;
}
