import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { configuration } from "./config/configuration";
import { validationSchema } from "./config/validation";
import { PermissionsModule } from "./permissions/permissions.module";
import { PrismaModule } from "./prisma/prisma.module";
import { RolesModule } from "./roles/roles.module";
import { UsersModule } from "./users/users.module";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path/posix";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { CommandModule } from "nestjs-command";
import { LoggerModule } from "./logger/logger.module";
import { LogService } from "./logger/log.service";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      debug: false,
      playground: false,
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        "graphql-ws": true,
        "subscriptions-transport-ws": true
      },
      //@CodeFirst
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true
      // @SchemaFirst
      // typePaths: ['./**/*.graphql'],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   outputAs: 'class',
      // },
    }),
    PrismaModule,
    LoggerModule,
    CommandModule,
    RolesModule,
    UsersModule,
    AuthModule,
    PermissionsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ]
})
export class AppModule {
}
