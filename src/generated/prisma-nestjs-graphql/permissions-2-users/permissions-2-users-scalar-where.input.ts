import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class Permissions2UsersScalarWhereInput {

    @Field(() => [Permissions2UsersScalarWhereInput], {nullable:true})
    AND?: Array<Permissions2UsersScalarWhereInput>;

    @Field(() => [Permissions2UsersScalarWhereInput], {nullable:true})
    OR?: Array<Permissions2UsersScalarWhereInput>;

    @Field(() => [Permissions2UsersScalarWhereInput], {nullable:true})
    NOT?: Array<Permissions2UsersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    permissionId?: IntFilter;

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
