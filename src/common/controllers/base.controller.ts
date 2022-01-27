import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { PermissionsGuard } from "../guards/permissions.guard";
import { RolesGuard } from "../guards/roles.guard";
import { MyLoggerService } from "../../logger/my-logger.service";
import { LogService } from "../../logger/log.service";

@UseGuards(JwtAuthGuard, PermissionsGuard, RolesGuard)
export class BaseController {
  protected logger: MyLoggerService;

  constructor(private readonly _logService: LogService, private readonly _context: string) {
    this.logger = new MyLoggerService(_logService, _context);
  }
}
