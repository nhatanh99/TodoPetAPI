import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTikiDto } from './dto/create-tiki.dto';
import { UpdateTikiDto } from './dto/update-tiki.dto';
import { IQueryTiki, Status } from './entities/tiki.entity';

@Injectable()
export class TikiService {
  constructor(private prisma: PrismaService) {}

  async create(createTikiDto: CreateTikiDto) {
    const data = createTikiDto;
    return await this.prisma.task.create({
      data: {
        title: data.title,
        status: data.status,
        createdDate: new Date(),
        description: data.description,
      },
    });
  }
  async update(id: number, updateTikiDto: UpdateTikiDto) {
    const data = updateTikiDto;
    return await this.prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        status: data.status,
        createdDate: new Date(),
        description: data.description,
      },
    });
  }

  async findAll(query: IQueryTiki) {
    const skip = (+query.page - 1) * +query.limit;
    const take = +query.limit;

    const data = await this.prisma.task.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query.search,
            },
          },
        ],
      },

      skip: skip,
      take: take,
    });

    const count = await this.prisma.task.count();

    return {
      current_page: +query.page,
      total: count,
      data: data,
    };
  }

  async findOne(id: number) {
    return await this.prisma.task.findUnique({
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
