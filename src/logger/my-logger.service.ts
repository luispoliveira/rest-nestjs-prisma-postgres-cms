import { Logger } from "@nestjs/common";
import { LogService } from "./log.service";
import { LogTypes } from "@prisma/client";

export type AditionalAuditData = {
  route?: string;
  action?: string;
  dto?: any;
  params?: any;
  query?: any;
  body?: any;
}

export class MyLoggerService {
  private logger: Logger;

  constructor(private readonly logService: LogService, private context: string) {
    this.logger = new Logger(context);
  }

  async audit(type: LogTypes, message: string, username: string, aditional?: AditionalAuditData) {

    await this.logService.create({
      context: this.context,
      type: type,
      message: message,
      createdBy: username,
      updatedBy: username,
      ...aditional
    });

    this.log(type, message);
  }

  private log(type: LogTypes, message: string) {
    switch (type) {
      case LogTypes.log:
        this.logger.log(message);
        break;
      case LogTypes.error:
        this.logger.log(message);
        break;
      case LogTypes.warning:
        this.logger.log(message);
        break;
    }
  }


}
