import { Bank } from 'src/banks/entities/bank.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { InsuranceCompany } from 'src/insurance-companies/entities/insurance-company.entity';
import { InsuranceObject } from 'src/insurance-objects/entities/insurance-object.entity';
import { InsuranceType } from 'src/insurance-types/entities/insurance-type.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { SellingPoint } from 'src/selling-points/entities/selling-point.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Blank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  series: string;

  @Column()
  number: string;

  @Column()
  conclusionDate: Date;

  @Column()
  activeDateStart: Date;

  @Column()
  activeDateEnd: Date;

  @Column()
  useDateStart: Date;

  @Column()
  useDateEnd: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  sum: number;

  @Column()
  premium: number;

  @Column({ default: false })
  isProlonged: Boolean;

  @OneToOne(() => Blank, (blank) => blank.nextBlank)
  @JoinColumn()
  previousBlank: Blank;

  @OneToOne(() => Blank, (blank) => blank.previousBlank)
  @JoinColumn()
  nextBlank: Blank;

  @Column({ nullable: true })
  comment: string;

  @ManyToOne(() => Client, (client) => client.blanks)
  client: Client;

  @ManyToOne(() => Employee, (employee) => employee.blanks)
  employee: Employee;

  @ManyToOne(() => Bank, (bank) => bank.blanks)
  bank: Bank;

  @ManyToOne(
    () => InsuranceCompany,
    (insuranceCompany) => insuranceCompany.blanks,
  )
  insuranceCompany: InsuranceCompany;

  @ManyToOne(() => InsuranceType, (insuranceType) => insuranceType.blanks)
  insuranceType: InsuranceType;

  @ManyToOne(() => SellingPoint, (sellingPoint) => sellingPoint.blanks)
  sellingPoint: SellingPoint;

  @OneToOne(() => Receipt, (receipt) => receipt.blank)
  receipt: Receipt;

  @ManyToOne(() => InsuranceObject, (insuranceObject) => insuranceObject.blanks)
  insuranceObject: InsuranceObject;
}
