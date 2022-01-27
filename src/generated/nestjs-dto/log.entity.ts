
import {Prisma,LogTypes} from '@prisma/client'


export class Log {
  id: number ;
context: string ;
type: LogTypes ;
route: string  | null;
action: string  | null;
dto: Prisma.JsonValue  | null;
params: Prisma.JsonValue  | null;
query: Prisma.JsonValue  | null;
body: Prisma.JsonValue  | null;
error: Prisma.JsonValue  | null;
message: string ;
createdAt: Date ;
updatedAt: Date ;
createdBy: string  | null;
updatedBy: string  | null;
}
