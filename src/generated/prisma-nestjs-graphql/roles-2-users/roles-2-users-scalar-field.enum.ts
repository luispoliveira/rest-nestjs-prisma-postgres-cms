import { registerEnumType } from '@nestjs/graphql';

export enum Roles2UsersScalarFieldEnum {
    roleId = "roleId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(Roles2UsersScalarFieldEnum, { name: 'Roles2UsersScalarFieldEnum', description: undefined })
