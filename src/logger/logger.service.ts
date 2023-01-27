import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoggerService {
  constructor(private readonly prismaService: PrismaService) {}
  private blockedClassName = ['AuthResolver', 'AuthController'];

  async create(data: Prisma.LogCreateInput) {
    try {
      if (this.blockedClassName.includes(data.className)) data.body = undefined;
      return await this.prismaService.log.create({
        data: data,
      });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async update(args: Prisma.LogUpdateArgs) {
    try {
      return await this.prismaService.log.update(args);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
