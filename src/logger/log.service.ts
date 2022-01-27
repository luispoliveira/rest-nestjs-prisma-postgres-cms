import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class LogService {
  constructor(private readonly prismaService: PrismaService) {
  }

  async create(data: Prisma.LogCreateInput) {
    try {
      await this.prismaService.log.create({
        data: data
      })
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
