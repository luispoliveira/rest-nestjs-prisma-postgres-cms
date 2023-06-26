import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';
import { ContextUtil } from 'src/utils/context.util';

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext): User => {
    data = data;
    const request = ContextUtil.getRequest(context);
    return request.user;
  },
);
