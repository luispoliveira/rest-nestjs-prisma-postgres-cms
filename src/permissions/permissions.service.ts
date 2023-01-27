import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleEnum } from 'src/roles/enums/role.enum';
import { DefaultPermissionData } from './data/default-permission.data';

@Injectable()
export class PermissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async ensureDefaultPermissions() {
    for (let defaultPermission of DefaultPermissionData) {
      const permission = await this.findOne({
        name: defaultPermission.name,
      });
      if (permission) return;
      const newPermission = await this.create({
        name: defaultPermission.name,
        createdBy: 'admin',
        updatedBy: 'admin',
        roles: {
          create: {
            role: {
              connect: {
                name: RoleEnum.Admin,
              },
            },
          },
        },
      });
      Logger.log(
        `Role: ${newPermission.name} created.`,
        PermissionsService.name,
      );
    }
  }

  async create(data: Prisma.PermissionCreateInput) {
    try {
      const permission = await this.prisma.permission.create({
        data: data,
        include: {
          users: {
            include: {
              user: true,
            },
          },
          roles: {
            include: {
              role: true,
            },
          },
        },
      });

      return permission;
    } catch (e) {
      Logger.error(e, PermissionsService.name);
      throw new BadRequestException(e);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PermissionWhereUniqueInput;
    where?: Prisma.PermissionWhereInput;
    orderBy?: Prisma.PermissionOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.prisma.permission.findMany({
      skip: skip,
      take: take,
      cursor: cursor,
      where: where,
      orderBy: orderBy,
      include: {
        roles: {
          include: {
            role: true,
          },
        },
        users: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async findOne(permissionWhereInput: Prisma.PermissionWhereUniqueInput) {
    const permission = await this.prisma.permission.findUnique({
      where: permissionWhereInput,
      include: {
        roles: {
          include: {
            role: true,
          },
        },
        users: {
          include: {
            user: true,
          },
        },
      },
    });
    return permission;
  }
}
