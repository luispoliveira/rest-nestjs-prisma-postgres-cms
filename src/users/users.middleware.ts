import { Prisma, User } from '@prisma/client';
import { PasswordUtil } from 'src/utils/password.util';

export class UsersMiddleware {
  public async handle(
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<User | User[]>,
  ) {
    switch (params.model) {
      case Prisma.ModelName.User:
        /**
         * before
         */
        const newParams = await this.before(params);
        const result = await next(newParams);
        /**
         * after
         */
        return await this.after(newParams, result);
      default:
        return next(params);
    }
  }

  private async before(
    params: Prisma.MiddlewareParams,
  ): Promise<Prisma.MiddlewareParams> {
    switch (params.action) {
      case 'create':
        return await this.beforeCreate(params);
      case 'update':
        return await this.beforeUpdate(params);
      default:
        return params;
    }
  }

  private async after(params: Prisma.MiddlewareParams, result: User | User[]) {
    switch (params.action) {
      default:
        return result;
    }
  }

  private async beforeCreate(
    params: Prisma.MiddlewareParams,
  ): Promise<Prisma.MiddlewareParams> {
    const newParams = params;
    newParams.args.data.password = await PasswordUtil.hash(
      params.args.data.password,
    );
    return newParams;
  }

  private async beforeUpdate(
    params: Prisma.MiddlewareParams,
  ): Promise<Prisma.MiddlewareParams> {
    const newParams = params;
    if (params.args.data.password) {
      newParams.args.data.password = await PasswordUtil.hash(
        params.args.data.password,
      );
    }
    return newParams;
  }
}
