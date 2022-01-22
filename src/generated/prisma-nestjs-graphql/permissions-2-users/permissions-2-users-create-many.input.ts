import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class Permissions2UsersCreateManyInput {

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    createdBy?: string;

    @HideField()
    updatedBy?: string;
}
