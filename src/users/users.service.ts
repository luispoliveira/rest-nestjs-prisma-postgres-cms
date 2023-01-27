import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, User } from '@prisma/client';
import { RoleEnum } from 'src/roles/enums/role.enum';
import { PrismaService } from '../prisma/prisma.service';
import { UsersMiddleware } from './users.middleware';

@Injectable()
export class UsersService {
  private usersMiddleware: UsersMiddleware = new UsersMiddleware();

  private readonly defaultAdmin: {
    email: string;
    username: string;
    password: string;
  };

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {
    this.defaultAdmin = this.config.get('admin');

    /**
     * middlewares para hashar a password
     */
    this.prisma.$use(
      async (
        params: Prisma.MiddlewareParams,
        next: (params: Prisma.MiddlewareParams) => Promise<User | User[]>,
      ) => {
        return this.usersMiddleware.handle(params, next);
      },
    );
  }

  async ensureAdminUser() {
    const user = await this.findOne({ username: this.defaultAdmin.username });

    if (user) {
      Logger.log(`Admin user : ${user.username}`, UsersService.name);
      return true;
    }
    const createdUser = await this.create({
      username: this.defaultAdmin.username,
      email: this.defaultAdmin.email,
      password: this.defaultAdmin.password,
      isActive: true,
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
      `Admin user created: ${createdUser.username}`,
      UsersService.name,
    );
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: data,
        include: {
          roles: {
            include: {
              role: true,
            },
          },
          permissions: {
            include: {
              permission: true,
            },
          },
        },
      });
      return user;
    } catch (e) {
      Logger.error(e, UsersService.name);
      throw new BadRequestException(e);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.prisma.user.findMany({
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
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    const user = await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        roles: {
          include: {
            role: true,
          },
        },
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
    // if (!user) throw new NotFoundException("User not Found");

    return user;
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { data, where } = params;

    try {
      return await this.prisma.user.update({
        data: data,
        where: where,
        include: {
          roles: {
            include: {
              role: true,
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
      Logger.error(e, UsersService.name);
      throw new BadRequestException(e);
    }
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where: where,
      });
    } catch (e) {
      Logger.error(e, UsersService.name);
      throw new BadRequestException(e);
    }
  }
}
