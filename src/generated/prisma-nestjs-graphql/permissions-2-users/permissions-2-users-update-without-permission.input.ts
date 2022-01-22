import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPermissionsInput } from '../user/user-update-one-required-without-permissions.input';

@InputType()
export class Permissions2UsersUpdateWithoutPermissionInput {

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPermissionsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPermissionsInput;
}
