import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Permissions2RolesWhereInput } from './permissions-2-roles-where.input';
import { Permissions2RolesOrderByWithAggregationInput } from './permissions-2-roles-order-by-with-aggregation.input';
import { Permissions2RolesScalarFieldEnum } from './permissions-2-roles-scalar-field.enum';
import { Permissions2RolesScalarWhereWithAggregatesInput } from './permissions-2-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { Permissions2RolesCountAggregateInput } from './permissions-2-roles-count-aggregate.input';
import { Permissions2RolesAvgAggregateInput } from './permissions-2-roles-avg-aggregate.input';
import { Permissions2RolesSumAggregateInput } from './permissions-2-roles-sum-aggregate.input';
import { Permissions2RolesMinAggregateInput } from './permissions-2-roles-min-aggregate.input';
import { Permissions2RolesMaxAggregateInput } from './permissions-2-roles-max-aggregate.input';

@ArgsType()
export class Permissions2RolesGroupByArgs {

    @Field(() => Permissions2RolesWhereInput, {nullable:true})
    where?: Permissions2RolesWhereInput;

    @Field(() => [Permissions2RolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<Permissions2RolesOrderByWithAggregationInput>;

    @Field(() => [Permissions2RolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Permissions2RolesScalarFieldEnum>;

    @Field(() => Permissions2RolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Permissions2RolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => Permissions2RolesCountAggregateInput, {nullable:true})
    _count?: Permissions2RolesCountAggregateInput;

    @Field(() => Permissions2RolesAvgAggregateInput, {nullable:true})
    _avg?: Permissions2RolesAvgAggregateInput;

    @Field(() => Permissions2RolesSumAggregateInput, {nullable:true})
    _sum?: Permissions2RolesSumAggregateInput;

    @Field(() => Permissions2RolesMinAggregateInput, {nullable:true})
    _min?: Permissions2RolesMinAggregateInput;

    @Field(() => Permissions2RolesMaxAggregateInput, {nullable:true})
    _max?: Permissions2RolesMaxAggregateInput;
}
