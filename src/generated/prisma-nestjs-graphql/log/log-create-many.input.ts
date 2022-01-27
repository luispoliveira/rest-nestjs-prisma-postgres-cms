import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogTypes } from '../prisma/log-types.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class LogCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    context!: string;

    @Field(() => LogTypes, {nullable:false})
    type!: keyof typeof LogTypes;

    @Field(() => String, {nullable:true})
    route?: string;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    dto?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    params?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    query?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    body?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    error?: any;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}
