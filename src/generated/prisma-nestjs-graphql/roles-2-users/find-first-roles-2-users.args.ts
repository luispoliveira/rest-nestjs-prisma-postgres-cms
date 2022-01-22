import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Roles2UsersWhereInput } from './roles-2-users-where.input';
import { Roles2UsersOrderByWithRelationInput } from './roles-2-users-order-by-with-relation.input';
import { Roles2UsersWhereUniqueInput } from './roles-2-users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Roles2UsersScalarFieldEnum } from './roles-2-users-scalar-field.enum';

@ArgsType()
export class FindFirstRoles2UsersArgs {

    @Field(() => Roles2UsersWhereInput, {nullable:true})
    where?: Roles2UsersWhereInput;

    @Field(() => [Roles2UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<Roles2UsersOrderByWithRelationInput>;

    @Field(() => Roles2UsersWhereUniqueInput, {nullable:true})
    cursor?: Roles2UsersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Roles2UsersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Roles2UsersScalarFieldEnum>;
}
