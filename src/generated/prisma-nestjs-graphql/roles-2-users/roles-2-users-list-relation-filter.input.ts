import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Roles2UsersWhereInput } from './roles-2-users-where.input';

@InputType()
export class Roles2UsersListRelationFilter {

    @Field(() => Roles2UsersWhereInput, {nullable:true})
    every?: Roles2UsersWhereInput;

    @Field(() => Roles2UsersWhereInput, {nullable:true})
    some?: Roles2UsersWhereInput;

    @Field(() => Roles2UsersWhereInput, {nullable:true})
    none?: Roles2UsersWhereInput;
}
