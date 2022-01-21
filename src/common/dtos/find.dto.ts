import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum SortDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export class FindDto {
  @ApiProperty({ required: false, default: 1, type: 'integer' })
  @IsOptional()
  page = 1;

  @ApiProperty({ required: false, default: 10, type: 'integer' })
  @IsOptional()
  limit = 10;

  @ApiProperty({ required: false, type: 'string', default: 'id' })
  @IsOptional()
  @IsString()
  orderField = 'id';

  @ApiProperty({ required: false, enum: SortDirectionEnum })
  @IsOptional()
  @IsEnum(SortDirectionEnum)
  orderDirection: SortDirectionEnum = SortDirectionEnum.DESC;
}
