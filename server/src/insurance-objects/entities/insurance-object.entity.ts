import { Bank } from 'src/banks/entities/bank.entity';
import { Blank } from 'src/blanks/entities/blank.entity';
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

	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	horsePowers: number;

	@Column({ nullable: true })
	year: number;

	@Column({ nullable: true })
	isCredited: boolean;

	@ManyToOne(() => Bank, (bank) => bank.insuranceObjects)
	bank: Bank;

	// @ManyToOne(
	//   () => InsuranceObjectType,
	//   (insuranceObjectType) => insuranceObjectType.insuranceObjects,
	// )
	// insuranceObjectType: InsuranceObjectType;

	@OneToMany(() => Blank, (blank) => blank.insuranceObject)
	blanks: Blank[];
}
