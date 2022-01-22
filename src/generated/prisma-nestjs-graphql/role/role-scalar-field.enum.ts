import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined })
