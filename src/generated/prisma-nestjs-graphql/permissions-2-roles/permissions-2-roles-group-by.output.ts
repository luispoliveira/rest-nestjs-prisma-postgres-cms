import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Permissions2RolesCountAggregate } from './permissions-2-roles-count-aggregate.output';
import { Permissions2RolesAvgAggregate } from './permissions-2-roles-avg-aggregate.output';
import { Permissions2RolesSumAggregate } from './permissions-2-roles-sum-aggregate.output';
import { Permissions2RolesMinAggregate } from './permissions-2-roles-min-aggregate.output';
import { Permissions2RolesMaxAggregate } from './permissions-2-roles-max-aggregate.output';

@ObjectType()
export class Permissions2RolesGroupBy {

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Permissions2RolesCountAggregate, {nullable:true})
    _count?: Permissions2RolesCountAggregate;

    @Field(() => Permissions2RolesAvgAggregate, {nullable:true})
    _avg?: Permissions2RolesAvgAggregate;

    @Field(() => Permissions2RolesSumAggregate, {nullable:true})
    _sum?: Permissions2RolesSumAggregate;

    @Field(() => Permissions2RolesMinAggregate, {nullable:true})
    _min?: Permissions2RolesMinAggregate;

    @Field(() => Permissions2RolesMaxAggregate, {nullable:true})
    _max?: Permissions2RolesMaxAggregate;
}
