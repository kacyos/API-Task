import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductResolver } from "./product.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
