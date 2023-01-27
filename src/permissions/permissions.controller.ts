import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Permission } from 'prisma/__generated__/prisma-class-generator/permission';
import { BaseController } from '../common/controllers/base.controller';
import { OrderDto } from '../common/dtos/order.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { PermissionsService } from './permissions.service';

@ApiTags('Permissions')
@ApiBearerAuth()
@ApiUnauthorizedResponse()
@Controller('permissions')
export class PermissionsController extends BaseController {
  constructor(private readonly permissionsService: PermissionsService) {
    super();
  }

  @ApiOkResponse({ type: Permission, isArray: true })
  @Get()
  findAll(
    //@Query() findPermissionDto: FindPermissionDto,
    @Query() paginationDto: PaginationDto,
    @Query() orderDto: OrderDto,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    const { page, limit } = paginationDto;
    const { orderDirection, orderField } = orderDto;
    //const { ...findPermission } = findPermissionDto;
    const skip = (page - 1) * limit;
    return this.permissionsService.findAll({
      skip: +skip,
      take: +limit,
      where: {},
      orderBy: {
        [orderField]: orderDirection,
      },
    });
  }

  @ApiOkResponse({ type: Permission, isArray: false })
  @ApiNotFoundResponse()
  @Get(':id')
  async finOne(
    @Param('id', ParseIntPipe) id: number,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    const permission = await this.permissionsService.findOne({
      id: id,
    });
    if (!permission) throw new NotFoundException('Permission Not Found');
    return permission;
  }
}
