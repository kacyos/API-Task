import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  ID: string;

  @Column()
  nome_do_produto: string;

  @Column()
  fabricante: string;

  @Column("integer")
  quantidade_em_estoque: number;

  @Column("decimal", { precision: 10, scale: 2 })
  valor: number;
}
