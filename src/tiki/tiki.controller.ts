import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { TikiService } from './tiki.service';
import { CreateTikiDto } from './dto/create-tiki.dto';
import { query } from 'express';
import { ICar } from './entities/tiki.entity';
import { ISCar1 } from './interface/car.interface';
import { CarDto } from './dto/get-car.dto';
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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tikiService.findOne(+id);
  // }

  // @Get(':code')
  // async getCar(@Param('code') code: number, @Query() query: ICar) {
  //   return this.tikiService.findOne(query);
  // }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTikiDto) {
    return await this.tikiService.update(Number(id), body);
  }

  @Get('/car')
  async getCar(@Body() body: CarDto, @Query() query: ISCar1[]) {
    try {
      const res = await this.tikiService.getCar;
      return {
        data: res,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tikiService.remove(Number(id));
  }
}
