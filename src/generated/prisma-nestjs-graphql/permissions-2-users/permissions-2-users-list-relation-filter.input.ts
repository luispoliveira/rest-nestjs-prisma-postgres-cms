import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2UsersWhereInput } from './permissions-2-users-where.input';

@InputType()
export class Permissions2UsersListRelationFilter {

    @Field(() => Permissions2UsersWhereInput, {nullable:true})
    every?: Permissions2UsersWhereInput;

    @Field(() => Permissions2UsersWhereInput, {nullable:true})
    some?: Permissions2UsersWhereInput;

    @Field(() => Permissions2UsersWhereInput, {nullable:true})
    none?: Permissions2UsersWhereInput;
}
