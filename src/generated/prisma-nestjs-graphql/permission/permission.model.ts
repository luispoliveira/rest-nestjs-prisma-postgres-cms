import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Permissions2Users } from '../permissions-2-users/permissions-2-users.model';
import { Permissions2Roles } from '../permissions-2-roles/permissions-2-roles.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Permissions2Users], {nullable:true})
    users?: Array<Permissions2Users>;

    @Field(() => [Permissions2Roles], {nullable:true})
    roles?: Array<Permissions2Roles>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
