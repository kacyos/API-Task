import { InputType } from "@nestjs/graphql";
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive,
} from "class-validator";

@InputType()
export class UpdateProductDto {
  @IsString()
  @IsNotEmpty({ message: "Nome do produto é obrigatório." })
  @IsOptional()
  nome_do_produto?: string;

  @IsString()
  @IsNotEmpty({ message: "Nome do fabricante é obrigatório." })
  @IsOptional()
  fabricante?: string;

  @IsNotEmpty({ message: "Informar a quantidade em estoque." })
  @IsNumber(
    { allowInfinity: false, maxDecimalPlaces: 0, allowNaN: false },
    { message: "A quantidade em estoque deve ser um valor inteiro." }
  )
  @IsPositive({ message: "O valor do produto deve ser maior que '0'." })
  @IsOptional()
  quantidade_em_estoque?: number;

  @IsNotEmpty({ message: "Informar o valor do produto." })
  @IsPositive({ message: "O valor do produto deve ser maior que '0'." })
  @IsOptional()
  valor?: number;
}
