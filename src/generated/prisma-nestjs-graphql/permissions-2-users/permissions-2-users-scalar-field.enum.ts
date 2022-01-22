import { registerEnumType } from '@nestjs/graphql';

export enum Permissions2UsersScalarFieldEnum {
    permissionId = "permissionId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(Permissions2UsersScalarFieldEnum, { name: 'Permissions2UsersScalarFieldEnum', description: undefined })
