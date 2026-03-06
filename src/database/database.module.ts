import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}
