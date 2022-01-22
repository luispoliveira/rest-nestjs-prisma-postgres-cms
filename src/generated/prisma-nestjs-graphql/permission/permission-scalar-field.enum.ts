import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
