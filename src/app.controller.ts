import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaservice: PrismaService) {}

  @Get('/metrics')
  async getMetrics() {
    return await this.prismaservice.$metrics.json();
  }
}
