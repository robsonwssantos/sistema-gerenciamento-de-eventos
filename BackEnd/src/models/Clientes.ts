import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

  @Column()
  public email: string;

  @Column()
  public senha: string;

  @Column()
  public CPF: string;

  @Column()
  public telefone: string;

  @Column()
  public endereco: string

  @Column()
  public situacao: boolean;


}
