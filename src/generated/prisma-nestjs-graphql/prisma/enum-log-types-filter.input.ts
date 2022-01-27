import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogTypes } from './log-types.enum';
import { NestedEnumLogTypesFilter } from './nested-enum-log-types-filter.input';

@InputType()
export class EnumLogTypesFilter {

    @Field(() => LogTypes, {nullable:true})
    equals?: keyof typeof LogTypes;

    @Field(() => [LogTypes], {nullable:true})
    in?: Array<keyof typeof LogTypes>;

    @Field(() => [LogTypes], {nullable:true})
    notIn?: Array<keyof typeof LogTypes>;

    @Field(() => NestedEnumLogTypesFilter, {nullable:true})
    not?: NestedEnumLogTypesFilter;
}
