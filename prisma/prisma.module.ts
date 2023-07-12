import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TikiModule } from 'src/tiki/tiki.module';

@Module({
  providers: [PrismaService, TikiModule],
  exports: [PrismaService],
})
export class PrismaModule {}
