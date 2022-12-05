import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import path from 'path';
import { TikiModule } from './tiki/tiki.module';
import configuration from './config/env.default';
import { TikiService } from './tiki/tiki.service';
import { TikiController } from './tiki/tiki.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, TikiModule],
  controllers: [TikiController],
  providers: [TikiService],
})
export class AppModule {}
