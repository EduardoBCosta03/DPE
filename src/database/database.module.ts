import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [PrismaService],
})
export class DatabaseModule {}
