import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';
import { Int } from '@nestjs/graphql';
import { Role } from '../role/role.model';

@ObjectType()
export class Permissions2Roles {

    @Field(() => Permission, {nullable:false})
    permission?: Permission;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;
}
