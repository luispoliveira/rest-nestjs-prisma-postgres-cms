import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class Permissions2RolesScalarWhereInput {

    @Field(() => [Permissions2RolesScalarWhereInput], {nullable:true})
    AND?: Array<Permissions2RolesScalarWhereInput>;

    @Field(() => [Permissions2RolesScalarWhereInput], {nullable:true})
    OR?: Array<Permissions2RolesScalarWhereInput>;

    @Field(() => [Permissions2RolesScalarWhereInput], {nullable:true})
    NOT?: Array<Permissions2RolesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    createdBy?: StringNullableFilter;

    @HideField()
    updatedBy?: StringNullableFilter;
}
