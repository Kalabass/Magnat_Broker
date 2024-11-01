import { Blank } from 'src/blanks/entities/blank.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  comment: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  series: number;

  @Column({ nullable: true })
  number: number;

  @OneToMany(() => Blank, (blank) => blank.client)
  blanks: Blank[];

  @OneToMany(() => Receipt, (receipt) => receipt.createdBy)
  createdReceipts: Receipt[];

  @OneToMany(() => Receipt, (receipt) => receipt.processedBy)
  processedReceipts: Receipt[];
}
