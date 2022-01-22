import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class PaginationDto {
  @ApiProperty({ required: false, default: 1, type: 'integer' })
  @IsOptional()
  page = 1;

  @ApiProperty({ required: false, default: 10, type: 'integer' })
  @IsOptional()
  limit = 10;
}
