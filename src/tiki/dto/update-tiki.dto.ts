import { PartialType } from '@nestjs/mapped-types';
import { CreateTikiDto } from './create-tiki.dto';

export class UpdateTikiDto extends PartialType(CreateTikiDto) {}
