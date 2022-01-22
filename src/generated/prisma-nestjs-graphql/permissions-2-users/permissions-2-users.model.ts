import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Permissions2Users {

    @Field(() => Permission, {nullable:false})
    permission?: Permission;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;
}
