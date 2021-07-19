import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Repository } from "typeorm";
import { CreateProductInput } from "./dto/createProduct.input";
import { UpdateProductDto } from "./dto/updateProduct.input";
import { Produto } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Produto)
    private productRepository: Repository<Produto>
  ) {}

  async createProduct(data: CreateProductInput): Promise<Produto> {
    const product = this.productRepository.create(data);
    const productSaved = await this.productRepository.save(product);

    if (!productSaved) {
      throw new InternalServerErrorException("Falha ao criar produto");
    }

    return productSaved;
  }

  async updateProduct(id: string, data: UpdateProductDto): Promise<Produto> {
    const product = await this.findOneProduct(id);

    await this.productRepository.update(product, { ...data });

    const productUpdated = this.productRepository.create({
      ...product,
      ...data,
    });

    return productUpdated;
  }

  async findAllProducts(): Promise<Produto[]> {
    const products = await this.productRepository.find();
    return products;
  }

  async findOneProduct(id: string): Promise<Produto> {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException("Produto não encontrado.");
    }

    return product;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const product = await this.findOneProduct(id);
    const deleteProduct = await this.productRepository.delete(product);

    if (deleteProduct) {
      return true;
    }

    return false;
  }

  async getQuantityProducts(): Promise<number> {
    const quantityProducts = await this.productRepository.count();
    return quantityProducts;
  }

  async getProductWithSmallerStock(): Promise<Produto> {
    const productWithSmallerStock = await this.productRepository.findOne({
      order: {
        quantidade_em_estoque: "ASC",
      },
    });

    return productWithSmallerStock;
  }

  async getProductWithLargerStock(): Promise<Produto> {
    const productWithLargerStock = await this.productRepository.findOne({
      order: {
        quantidade_em_estoque: "DESC",
      },
    });

    return productWithLargerStock;
  }

  async getProductsWithoutStock(): Promise<Produto[]> {
    const productsWithoutStock = await this.productRepository.find({
      quantidade_em_estoque: LessThan(5),
    });

    return productsWithoutStock;
  }
}
