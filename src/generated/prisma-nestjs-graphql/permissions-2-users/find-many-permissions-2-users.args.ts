import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2UsersWhereInput } from './permissions-2-users-where.input';
import { Permissions2UsersOrderByWithRelationInput } from './permissions-2-users-order-by-with-relation.input';
import { Permissions2UsersWhereUniqueInput } from './permissions-2-users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Permissions2UsersScalarFieldEnum } from './permissions-2-users-scalar-field.enum';

@ArgsType()
export class FindManyPermissions2UsersArgs {

    @Field(() => Permissions2UsersWhereInput, {nullable:true})
    where?: Permissions2UsersWhereInput;

    @Field(() => [Permissions2UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<Permissions2UsersOrderByWithRelationInput>;

    @Field(() => Permissions2UsersWhereUniqueInput, {nullable:true})
    cursor?: Permissions2UsersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Permissions2UsersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Permissions2UsersScalarFieldEnum>;
}
