import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUsersInput } from '../role/role-update-one-required-without-users.input';

@InputType()
export class Roles2UsersUpdateWithoutUserInput {

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutUsersInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersInput;
}
