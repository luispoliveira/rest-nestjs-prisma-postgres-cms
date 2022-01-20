import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { defaultRolesData } from './data/default-roles.data';

@Injectable()
export class RolesService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {
    /**
     * MIDDLEWARE DOCS
     * https://www.prisma.io/docs/concepts/components/prisma-client/middleware#running-order-and-the-middleware-stack
     */
    this.prisma.$use(
      async (
        params: Prisma.MiddlewareParams,
        next: (params: Prisma.MiddlewareParams) => Promise<Role>,
      ) => {
        if (
          params.model === Prisma.ModelName.Role &&
          params.action === 'findUnique'
        ) {
          const result = await next(params);
          return result;
        }
        return next(params);
      },
    );
  }

  async onModuleInit() {
    await this.ensureDefaultRoles();
  }

  private async ensureDefaultRoles() {
    for (let defaultRole of defaultRolesData) {
      try {
        await this.findOne({ name: defaultRole.name });
      } catch (e) {
        const newRole = await this.create({
          name: defaultRole.name,
          createdBy: 'admin',
          updatedBy: 'admin',
        });
        Logger.log(`Role: ${newRole.name} created.`, RolesService.name);
      }
    }
  }

  async create(data: Prisma.RoleCreateInput) {
    try {
      const role = await this.prisma.role.create({
        data,
        include: {
          users: {
            include: {
              user: true,
            },
          },
          permissions: {
            include: {
              permission: true,
            },
          },
        },
      });
      return role;
    } catch (e) {
      Logger.error(e, RolesService.name);
      throw new BadRequestException(e);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RoleWhereUniqueInput;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.prisma.role.findMany({
      skip: skip,
      take: take,
      cursor: cursor,
      where: where,
      orderBy: orderBy,
      include: {
        users: {
          include: {
            user: true,
          },
        },
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async findOne(roleWhereUniqueInput: Prisma.RoleWhereUniqueInput) {
    const role = await this.prisma.role.findUnique({
      where: roleWhereUniqueInput,
      include: {
        users: {
          include: {
            user: true,
          },
        },
        permissions: {
          include: {
            permission: true,
          },
        },
      },
      rejectOnNotFound: (err: Error) => {
        Logger.error(err, RolesService.name);
        throw new NotFoundException('Role not found');
      },
    });
    return role;
  }

  async update(params: {
    where: Prisma.RoleWhereUniqueInput;
    data: Prisma.RoleUpdateInput;
  }) {
    const { data, where } = params;

    try {
      return await this.prisma.role.update({
        data: data,
        where: where,
        include: {
          users: {
            include: {
              user: true,
            },
          },
          permissions: {
            include: {
              permission: true,
            },
          },
        },
      });
    } catch (e) {
      Logger.error(e, RolesService.name);
      throw new BadRequestException(e);
    }
  }

  async remove(where: Prisma.RoleWhereUniqueInput) {
    try {
      return await this.prisma.role.delete({
        where: where,
      });
    } catch (e) {
      Logger.error(e, RolesService.name);
      throw new BadRequestException(e);
    }
  }
}
