import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TikiService } from './tiki.service';
import { CreateTikiDto } from './dto/create-tiki.dto';
import { UpdateTikiDto } from './dto/update-tiki.dto';

@Controller('tiki')
export class TikiController {
  constructor(private readonly tikiService: TikiService) {}

  @Post()
  create(@Body() createTikiDto: CreateTikiDto) {
    return this.tikiService.create(createTikiDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.tikiService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tikiService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTikiDto: UpdateTikiDto) {
    return this.tikiService.update(Number(id), updateTikiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tikiService.remove(Number(id));
  }
}
