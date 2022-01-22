import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesWhereInput } from './permissions-2-roles-where.input';
import { Permissions2RolesOrderByWithRelationInput } from './permissions-2-roles-order-by-with-relation.input';
import { Permissions2RolesWhereUniqueInput } from './permissions-2-roles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Permissions2RolesScalarFieldEnum } from './permissions-2-roles-scalar-field.enum';

@ArgsType()
export class FindFirstPermissions2RolesArgs {

    @Field(() => Permissions2RolesWhereInput, {nullable:true})
    where?: Permissions2RolesWhereInput;

    @Field(() => [Permissions2RolesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<Permissions2RolesOrderByWithRelationInput>;

    @Field(() => Permissions2RolesWhereUniqueInput, {nullable:true})
    cursor?: Permissions2RolesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Permissions2RolesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Permissions2RolesScalarFieldEnum>;
}
