import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/clients.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(productDto: CreateProductDto[]): Promise<{ count: number }> {
    const result = (await this.prisma.product.createMany({
      data: productDto.map((product) => ({
        name: product.name,
        description: product.description ?? '',
        images: product.images ?? [],
        price: product.price,
      })),
    })) as { count: number };

    return { count: result.count };
  }
}
