import { ApiProperty } from '@nestjs/swagger';
import { CreateTikiDto } from './create-tiki.dto';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
export class CarDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
