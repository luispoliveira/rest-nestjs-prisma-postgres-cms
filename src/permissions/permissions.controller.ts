import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Permission } from 'src/generated/nestjs-dto/permission.entity';
import { FindPermissionDto } from './dtos/find-permission.dto';
import { PermissionsService } from './permissions.service';

@ApiTags('Permissions')
@ApiBearerAuth()
@ApiUnauthorizedResponse()
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @ApiOkResponse({ type: Permission, isArray: true })
  @Get()
  findAll(@Query() findPermissionDto: FindPermissionDto) {
    const { page, limit, orderDirection, orderField, ...findPermission } =
      findPermissionDto;
    const skip = (findPermissionDto.page - 1) * findPermissionDto.limit;
    return this.permissionsService.findAll({
      skip: +skip,
      take: +limit,
      where: {
        ...findPermission,
      },
      orderBy: {
        [findPermissionDto.orderField]: findPermissionDto.orderDirection,
      },
    });
  }

  @ApiOkResponse({ type: Permission, isArray: false })
  @ApiNotFoundResponse()
  @Get(':id')
  finOne(@Param('id', ParseIntPipe) id: number) {
    return this.permissionsService.findOne({
      id: id,
    });
  }
}
