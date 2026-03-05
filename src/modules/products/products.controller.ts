import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/clients.dto';
import { BatchPayload } from 'generated/prisma/internal/prismaNamespace';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() productDto: CreateProductDto[]): Promise<BatchPayload> {
    return await this.productsService.create(productDto);
  }
}
