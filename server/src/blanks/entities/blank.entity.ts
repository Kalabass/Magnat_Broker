import { BlankSeries } from 'src/blank-series/entities/blank-series.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { InsuranceCompany } from 'src/insurance-companies/entities/insurance-company.entity';
import { InsuranceObject } from 'src/insurance-objects/entities/insurance-object.entity';
import { InsuranceType } from 'src/insurance-types/entities/insurance-type.entity';
import { PaymentType } from 'src/payment-types/entities/payment-type.entity';
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

export type MortgageType = 'жизнь' | 'жильё';
@Entity()
export class Blank {
	@PrimaryGeneratedColumn()
	id: number;

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

	@Column({ default: 400000 })
	sum: number;

	@Column()
	premium: number;

	@Column({ nullable: true })
	mortgageType: MortgageType;

	@Column({ nullable: true })
	email: string;

	@Column()
	useDateEnd: Date;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

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

	@ManyToOne(
		() => InsuranceCompany,
		(insuranceCompany) => insuranceCompany.blanks
	)
	insuranceCompany: InsuranceCompany;

	@ManyToOne(() => InsuranceType, (insuranceType) => insuranceType.blanks)
	insuranceType: InsuranceType;

	@ManyToOne(() => SellingPoint, (sellingPoint) => sellingPoint.blanks)
	sellingPoint: SellingPoint;

	@OneToOne(() => Receipt, (receipt) => receipt.blank)
	receipt: Receipt;
	//TODO: возможно тут many-to-many
	@ManyToOne(() => InsuranceObject, (insuranceObject) => insuranceObject.blanks)
	insuranceObject: InsuranceObject;

	@ManyToOne(() => BlankSeries, (blankSeries) => blankSeries.blanks)
	blankSeries: BlankSeries;

	@ManyToOne(() => PaymentType, (paymentType) => paymentType.blanks)
	paymentType: PaymentType;
}
