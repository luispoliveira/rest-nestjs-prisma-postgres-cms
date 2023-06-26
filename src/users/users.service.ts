import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, User } from '@prisma/client';
import { RoleEnum } from 'src/roles/enums/role.enum';
import { PrismaService } from '../prisma/prisma.service';
import { UsersMiddleware } from './users.middleware';

@Injectable()
export class UsersService {
  private usersMiddleware: UsersMiddleware = new UsersMiddleware();
  private readonly logger = new Logger(UsersService.name);
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
    const user = await this.findOne({
      where: { username: this.defaultAdmin.username },
    });

    if (user) {
      this.logger.log(`Admin user : ${user.username}`);
      return true;
    }
    const createdUser = await this.create({
      data: {
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
      },
    });

    this.logger.log(`Admin user created: ${createdUser.username}`);
  }

  async create(args: Prisma.UserCreateArgs): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        ...args,
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
      this.logger.error(e);
      throw new BadRequestException(e);
    }
  }

  async findAll(args: Prisma.UserFindManyArgs): Promise<User[]> {
    return await this.prisma.user.findMany({
      ...args,
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

  async findOne(args: Prisma.UserFindUniqueArgs) {
    return await this.prisma.user.findUnique({
      ...args,
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

  async update(args: Prisma.UserUpdateArgs): Promise<User> {
    try {
      return await this.prisma.user.update({
        ...args,
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
      this.logger.error(e);
      throw new BadRequestException(e);
    }
  }

  async remove(args: Prisma.UserDeleteArgs): Promise<User> {
    try {
      return await this.prisma.user.delete({
        ...args,
      });
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException(e);
    }
  }
}
