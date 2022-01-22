import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@prisma/client";
import { GqlExecutionContext } from "@nestjs/graphql";

export const GqlGetUser = createParamDecorator(
  (data, context: ExecutionContext): User => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
);
