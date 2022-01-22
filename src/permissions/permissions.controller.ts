import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { Permission } from "src/generated/nestjs-dto/permission.entity";
import { FindPermissionDto } from "../common/dtos/permissions/find-permission.dto";
import { PermissionsService } from "./permissions.service";
import { PaginationDto } from "../common/dtos/pagination.dto";
import { OrderDto } from "../common/dtos/order.dto";
import { BaseController } from "../common/controllers/base.controller";

@ApiTags("Permissions")
@ApiBearerAuth()
@ApiUnauthorizedResponse()
@Controller("permissions")
export class PermissionsController extends BaseController{
  constructor(private readonly permissionsService: PermissionsService) {
    super();
  }

  @ApiOkResponse({ type: Permission, isArray: true })
  @Get()
  findAll(@Query() findPermissionDto: FindPermissionDto, @Query() paginationDto: PaginationDto, @Query() orderDto: OrderDto) {
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
  finOne(@Param("id", ParseIntPipe) id: number) {
    return this.permissionsService.findOne({
      id: id
    });
  }
}
