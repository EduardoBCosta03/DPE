import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from 'src/modules/products/products.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [ProductsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
