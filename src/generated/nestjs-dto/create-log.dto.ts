
import {Prisma,LogTypes} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateLogDto {
  context: string;
@ApiProperty({ enum: LogTypes})
type: LogTypes;
route?: string;
action?: string;
dto?: Prisma.InputJsonValue;
params?: Prisma.InputJsonValue;
query?: Prisma.InputJsonValue;
body?: Prisma.InputJsonValue;
error?: Prisma.InputJsonValue;
message: string;
createdBy?: string;
updatedBy?: string;
}
