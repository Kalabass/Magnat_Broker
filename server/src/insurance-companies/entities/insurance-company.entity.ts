import { Blank } from 'src/blanks/entities/blank.entity';
import { InsuranceType } from 'src/insurance-types/entities/insurance-type.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InsuranceCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  comment: string;

  @OneToMany(() => Blank, (blank) => blank.client)
  blanks: Blank[];

  @ManyToMany(() => InsuranceType)
  @JoinTable()
  insuranceTypes: InsuranceType[];
}
