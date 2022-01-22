import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Roles2Users } from '../roles-2-users/roles-2-users.model';
import { Permissions2Roles } from '../permissions-2-roles/permissions-2-roles.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Roles2Users], {nullable:true})
    users?: Array<Roles2Users>;

    @Field(() => [Permissions2Roles], {nullable:true})
    permissions?: Array<Permissions2Roles>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
