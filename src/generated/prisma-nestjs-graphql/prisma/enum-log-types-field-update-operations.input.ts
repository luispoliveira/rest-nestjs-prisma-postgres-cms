import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogTypes } from './log-types.enum';

@InputType()
export class EnumLogTypesFieldUpdateOperationsInput {

    @Field(() => LogTypes, {nullable:true})
    set?: keyof typeof LogTypes;
}
