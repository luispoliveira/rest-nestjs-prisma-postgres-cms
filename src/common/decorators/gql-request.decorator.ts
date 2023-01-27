import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GqlRequest = createParamDecorator(
  (data, context: ExecutionContext) => {
    data = data;
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  },
);
