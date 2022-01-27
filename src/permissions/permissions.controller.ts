import {
  Controller,
  Get,
  Param,
  Query,
  Request,
  ParseIntPipe
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { FindPermissionDto } from "./dtos/find-permission.dto";
import { PermissionsService } from "./permissions.service";
import { PaginationDto } from "../common/dtos/pagination.dto";
import { OrderDto } from "../common/dtos/order.dto";
import { BaseController } from "../common/controllers/base.controller";
import { Permission } from "../common/entities/permission.entity";
import { LogTypes, User } from "@prisma/client";
import { LogService } from "../logger/log.service";
import { GetUser } from "../common/decorators/get-user.decorator";

@ApiTags("Permissions")
@ApiBearerAuth()
@ApiUnauthorizedResponse()
@Controller("permissions")
export class PermissionsController extends BaseController {
  constructor(private readonly permissionsService: PermissionsService, private readonly logService: LogService) {
    super(logService, PermissionsController.name);
  }

  @ApiOkResponse({ type: Permission, isArray: true })
  @Get()
  findAll(@Query() findPermissionDto: FindPermissionDto, @Query() paginationDto: PaginationDto, @Query() orderDto: OrderDto, @GetUser() user: User, @Request() request) {
    this.logger.audit(LogTypes.log, "Permission:findAll accessed", user.username, {
      route: request.url,
      action: this.findAll.name,
      dto: findPermissionDto,
      params: request.params,
      query: request.query,
      body: request.body
    });

    const { page, limit } = paginationDto;
    const { orderDirection, orderField } = orderDto;
    const { ...findPermission } =
      findPermissionDto;
    const skip = (page - 1) * limit;
    return this.permissionsService.findAll({
      skip: +skip,
      take: +limit,
      where: {},
      orderBy: {
        [orderField]: orderDirection
      }
    });
  }

  @ApiOkResponse({ type: Permission, isArray: false })
  @ApiNotFoundResponse()
  @Get(":id")
  finOne(@Param("id", ParseIntPipe) id: number, @GetUser() user: User, @Request() request) {
    this.logger.audit(LogTypes.log, "Permission:finOne accessed", user.username, {
      route: request.url,
      action: this.finOne.name,
      dto: {},
      params: request.params,
      query: request.query,
      body: request.body
    });

    return this.permissionsService.findOne({
      id: id
    });
  }
}
