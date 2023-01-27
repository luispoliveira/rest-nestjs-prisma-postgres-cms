import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { User } from '@prisma/client';

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext): User => {
    data = data;
    const request = getRequest(context);
    return request.user;
  },
);

const getRequest = (context: ExecutionContext) => {
  if (context.getType() === 'http') return context.switchToHttp().getRequest();

  if (context.getType<GqlContextType>() === 'graphql')
    return GqlExecutionContext.create(context).getContext().req;
};
