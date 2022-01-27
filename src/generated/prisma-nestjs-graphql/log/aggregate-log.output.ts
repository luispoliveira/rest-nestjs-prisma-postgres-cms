import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LogCountAggregate } from './log-count-aggregate.output';
import { LogAvgAggregate } from './log-avg-aggregate.output';
import { LogSumAggregate } from './log-sum-aggregate.output';
import { LogMinAggregate } from './log-min-aggregate.output';
import { LogMaxAggregate } from './log-max-aggregate.output';

@ObjectType()
export class AggregateLog {

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
