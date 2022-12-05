import { Module } from '@nestjs/common';
import { TikiService } from './tiki.service';
import { TikiController } from './tiki.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TikiController],
  providers: [TikiService, PrismaService],
})
export class TikiModule {}
