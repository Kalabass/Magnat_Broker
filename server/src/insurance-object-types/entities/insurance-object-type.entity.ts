import { InsuranceObject } from 'src/insurance-objects/entities/insurance-object.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InsuranceObjectType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => InsuranceObject, (insuranceObject) => insuranceObject.bank)
  insuranceObjects: InsuranceObject[];
}
