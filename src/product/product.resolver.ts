import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateProductInput } from "./dto/createProduct.input";
import { UpdateProductDto } from "./dto/updateProduct.input";
import { Produto } from "./product.entity";
import { ProductService } from "./product.service";

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Produto])
  async BuscarProdutos(): Promise<Produto[]> {
    const products = await this.productService.findAllProducts();
    console.log(products);
    return products;
  }

  @Query(() => Produto)
  async BuscarProdutoPorId(@Args("id") id: string): Promise<Produto> {
    const product = await this.productService.findOneProduct(id);
    return product;
  }

  @Query(() => Number)
  async ObterQuantidadeProdutos(): Promise<Number> {
    const quantityProducts = await this.productService.getQuantityProducts();
    return quantityProducts;
  }

  @Query(() => Produto)
  async ObterProdutoComMenorEstoque(): Promise<Produto> {
    const productWithSmallerStock = await this.productService.getProductWithSmallerStock();
    return productWithSmallerStock;
  }

  @Query(() => Produto)
  async ObterProdutoComMaiorEstoque(): Promise<Produto> {
    const productWithLargerStock = await this.productService.getProductWithLargerStock();
    return productWithLargerStock;
  }

  @Query(() => [Produto])
  async ObterProdutosSemEstoque(): Promise<Produto[]> {
    const productsWithoutStock = await this.productService.getProductsWithoutStock();
    return productsWithoutStock;
  }

  @Mutation(() => Produto)
  async AdicionarProduto(
    @Args("data") data: CreateProductInput
  ): Promise<Produto> {
    const product = await this.productService.createProduct(data);
    return product;
  }

  @Mutation(() => Produto)
  async AlterarProduto(
    @Args("id") id: string,
    @Args("data") data: UpdateProductDto
  ): Promise<Produto> {
    const product = await this.productService.updateProduct(id, data);
    return product;
  }

  @Mutation(() => Boolean)
  async DeletarProduto(@Args("id") id: string): Promise<boolean> {
    const deleteProduct = await this.productService.deleteProduct(id);
    return deleteProduct;
  }
}
