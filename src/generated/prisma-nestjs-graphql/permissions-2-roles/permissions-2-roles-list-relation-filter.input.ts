import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Permissions2RolesWhereInput } from './permissions-2-roles-where.input';

@InputType()
export class Permissions2RolesListRelationFilter {

    @Field(() => Permissions2RolesWhereInput, {nullable:true})
    every?: Permissions2RolesWhereInput;

    @Field(() => Permissions2RolesWhereInput, {nullable:true})
    some?: Permissions2RolesWhereInput;

    @Field(() => Permissions2RolesWhereInput, {nullable:true})
    none?: Permissions2RolesWhereInput;
}
