import { Bank } from 'src/banks/entities/bank.entity';
import { Blank } from 'src/blanks/entities/blank.entity';
import { InsuranceObjectType } from 'src/insurance-object-types/entities/insurance-object-type.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InsuranceObject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sum: number;

  @Column()
  premium: number;

  @Column()
  name: string;

  @Column()
  horsePowers: number;

  @Column()
  year: number;

  @Column()
  isCredited: boolean;

  @ManyToOne(() => Bank, (bank) => bank.insuranceObjects)
  bank: Bank;

  @ManyToOne(
    () => InsuranceObjectType,
    (insuranceObjectType) => insuranceObjectType.insuranceObjects,
  )
  insuranceObjectType: InsuranceObjectType;

  @OneToMany(() => Blank, (blank) => blank.insuranceObject)
  blanks: Blank[];
}
