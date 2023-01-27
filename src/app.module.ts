import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PermissionsModule } from './permissions/permissions.module';
import { PrismaModule } from './prisma/prisma.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

import { ApolloDriver } from '@nestjs/apollo';
import { CommandModule } from 'nestjs-command';
import { configuration, validationSchema } from './config';
import { LoggerModule } from './logger/logger.module';
import { EnvironmentEnum } from './shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV === EnvironmentEnum.Development,
      playground: false,
      driver: ApolloDriver,
      plugins:
        process.env.NODE_ENV === EnvironmentEnum.Production
          ? [ApolloServerPluginLandingPageProductionDefault()]
          : [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
      persistedQueries: false,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    PrismaModule,
    LoggerModule,
    CommandModule,
    RolesModule,
    UsersModule,
    AuthModule,
    PermissionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
