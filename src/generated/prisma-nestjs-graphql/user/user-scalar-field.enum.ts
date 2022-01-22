import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    isActive = "isActive",
    resetPasswordToken = "resetPasswordToken",
    resetPasswordExpires = "resetPasswordExpires",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
