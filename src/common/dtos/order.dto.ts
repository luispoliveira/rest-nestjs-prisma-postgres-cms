import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";

export enum SortDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export class OrderDto {
  @ApiProperty({ required: false, type: 'string', default: 'id' })
  @IsOptional()
  @IsString()
  orderField = 'id';

  @ApiProperty({ required: false, enum: SortDirectionEnum })
  @IsOptional()
  @IsEnum(SortDirectionEnum)
  orderDirection: SortDirectionEnum = SortDirectionEnum.DESC;
}
