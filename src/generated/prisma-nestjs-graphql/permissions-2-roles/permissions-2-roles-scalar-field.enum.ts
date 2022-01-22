import { registerEnumType } from '@nestjs/graphql';

export enum Permissions2RolesScalarFieldEnum {
    permissionId = "permissionId",
    roleId = "roleId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(Permissions2RolesScalarFieldEnum, { name: 'Permissions2RolesScalarFieldEnum', description: undefined })
