import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

  @Column()
  public descricao: string;

  @Column({type: 'date'})
  public data_inicio: Date;

  @Column({type: 'date'})
  public data_termino: Date;

  @Column()
  public endereco: string

}
