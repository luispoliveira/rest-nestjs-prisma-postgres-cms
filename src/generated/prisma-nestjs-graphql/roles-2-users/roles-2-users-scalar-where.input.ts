import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class Roles2UsersScalarWhereInput {

    @Field(() => [Roles2UsersScalarWhereInput], {nullable:true})
    AND?: Array<Roles2UsersScalarWhereInput>;

    @Field(() => [Roles2UsersScalarWhereInput], {nullable:true})
    OR?: Array<Roles2UsersScalarWhereInput>;

    @Field(() => [Roles2UsersScalarWhereInput], {nullable:true})
    NOT?: Array<Roles2UsersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @HideField()
    createdBy?: StringNullableFilter;

    @HideField()
    updatedBy?: StringNullableFilter;
}
