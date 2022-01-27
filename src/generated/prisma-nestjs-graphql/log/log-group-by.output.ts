import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogTypes } from '../prisma/log-types.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { LogCountAggregate } from './log-count-aggregate.output';
import { LogAvgAggregate } from './log-avg-aggregate.output';
import { LogSumAggregate } from './log-sum-aggregate.output';
import { LogMinAggregate } from './log-min-aggregate.output';
import { LogMaxAggregate } from './log-max-aggregate.output';

@ObjectType()
export class LogGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => LogCountAggregate, {nullable:true})
    _count?: LogCountAggregate;

    @Field(() => LogAvgAggregate, {nullable:true})
    _avg?: LogAvgAggregate;

    @Field(() => LogSumAggregate, {nullable:true})
    _sum?: LogSumAggregate;

    @Field(() => LogMinAggregate, {nullable:true})
    _min?: LogMinAggregate;

    @Field(() => LogMaxAggregate, {nullable:true})
    _max?: LogMaxAggregate;
}
