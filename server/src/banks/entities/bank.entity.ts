import { Blank } from 'src/blanks/entities/blank.entity';
import { InsuranceObject } from 'src/insurance-objects/entities/insurance-object.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  comment: string;

  @OneToMany(() => Blank, (blank) => blank.client)
  blanks: Blank[];

  @OneToMany(() => InsuranceObject, (insuranceObject) => insuranceObject.bank)
  insuranceObjects: InsuranceObject[];
}
