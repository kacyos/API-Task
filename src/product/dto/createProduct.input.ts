import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsNumber, IsPositive } from "class-validator";

@InputType()
export class CreateProductInput {
  @IsString()
  @IsNotEmpty({ message: "Nome do produto é obrigatório." })
  nome_do_produto: string;

  @IsString()
  @IsNotEmpty({ message: "Nome do fabricante é obrigatório." })
  fabricante: string;

  @IsNotEmpty({ message: "Informar a quantidade em estoque." })
  @IsNumber(
    { allowInfinity: false, maxDecimalPlaces: 0, allowNaN: false },
    { message: "A quantidade em estoque deve ser um valor inteiro." }
  )
  @IsPositive({ message: "O valor do produto deve ser maior que '0'." })
  quantidade_em_estoque: number;

  @IsNotEmpty({ message: "Informar o valor do produto." })
  @IsPositive({ message: "O valor do produto deve ser maior que '0'." })
  valor: number;
}
