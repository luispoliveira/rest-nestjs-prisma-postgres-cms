import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class Permissions2RolesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    permissionId?: true;

    @Field(() => Boolean, {nullable:true})
    roleId?: true;
}
