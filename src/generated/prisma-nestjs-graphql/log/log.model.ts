import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LogTypes } from '../prisma/log-types.enum';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Log {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    context!: string;

    @Field(() => LogTypes, {nullable:false})
    type!: keyof typeof LogTypes;

    @Field(() => String, {nullable:true})
    route!: string | null;

    @Field(() => String, {nullable:true})
    action!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    dto!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    params!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    query!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    body!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    error!: any | null;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;
}
