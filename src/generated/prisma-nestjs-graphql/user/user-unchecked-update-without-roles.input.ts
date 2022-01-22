import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { Permissions2UsersUncheckedUpdateManyWithoutUserInput } from '../permissions-2-users/permissions-2-users-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutRolesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @HideField()
    isActive?: BoolFieldUpdateOperationsInput;

    @HideField()
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    permissions?: Permissions2UsersUncheckedUpdateManyWithoutUserInput;
}
