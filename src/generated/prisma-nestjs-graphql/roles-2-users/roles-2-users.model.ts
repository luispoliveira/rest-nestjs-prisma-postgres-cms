import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Roles2Users {

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Int, {nullable:false})
    roleId!: number;

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
