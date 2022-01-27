import { registerEnumType } from '@nestjs/graphql';

export enum LogScalarFieldEnum {
    id = "id",
    context = "context",
    type = "type",
    route = "route",
    action = "action",
    dto = "dto",
    params = "params",
    query = "query",
    body = "body",
    error = "error",
    message = "message",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    createdBy = "createdBy",
    updatedBy = "updatedBy"
}


registerEnumType(LogScalarFieldEnum, { name: 'LogScalarFieldEnum', description: undefined })
