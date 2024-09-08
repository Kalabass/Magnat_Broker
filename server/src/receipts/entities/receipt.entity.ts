import { Blank } from 'src/blanks/entities/blank.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isProcessed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  processedAt: Date;

  @OneToOne(() => Blank, (blank) => blank.receipt)
  blank: Blank;

  @ManyToOne(() => Client, (client) => client.receipts)
  client: Client;

  @ManyToOne(() => Employee, (employee) => employee.createdReceipts)
  createdBy: Employee;

  @ManyToOne(() => Employee, (employee) => employee.createdReceipts)
  processedBy: Employee;
}
