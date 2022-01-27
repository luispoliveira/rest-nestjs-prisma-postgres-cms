import { registerEnumType } from '@nestjs/graphql';

export enum LogTypes {
    log = "log",
    error = "error",
    verbose = "verbose",
    warning = "warning",
    debug = "debug"
}


registerEnumType(LogTypes, { name: 'LogTypes', description: undefined })
