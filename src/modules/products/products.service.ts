import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/clients.dto';
import { PrismaService } from 'src/database/prisma.service';
import { BatchPayload } from 'generated/prisma/internal/prismaNamespace';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(productDto: CreateProductDto[]): Promise<BatchPayload> {
    const products = await this.prisma.product.createMany({
      data: productDto.map((product) => ({
        name: product.name,
        description: product.description ?? '',
        images: product.images ?? [],
        price: product.price,
      })),
    });
    return { count: products.count };
  }
}
