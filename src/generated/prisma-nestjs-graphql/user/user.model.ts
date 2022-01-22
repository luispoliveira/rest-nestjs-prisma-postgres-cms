import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Roles2Users } from '../roles-2-users/roles-2-users.model';
import { Permissions2Users } from '../permissions-2-users/permissions-2-users.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isActive!: boolean;

    @HideField()
    resetPasswordToken!: string | null;

    @HideField()
    resetPasswordExpires!: Date | null;

    @Field(() => [Roles2Users], {nullable:true})
    roles?: Array<Roles2Users>;

    @Field(() => [Permissions2Users], {nullable:true})
    permissions?: Array<Permissions2Users>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
