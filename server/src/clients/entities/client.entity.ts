import { Blank } from 'src/blanks/entities/blank.entity';
import { Receipt } from 'src/receipts/entities/receipt.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ default: false })
	isLegal: boolean;

	@Column()
	name: string;

	@Column({ nullable: true })
	dateOfBirth: Date;

	@Column({ nullable: true })
	phone: string;

	@Column({ nullable: true, type: 'bigint' })
	inn: number;

	@Column({ nullable: true })
	address: string;

	@Column({ nullable: true })
	series: number;

	@Column({ nullable: true })
	number: number;

	@Column({ nullable: true })
	comment: string;

	@OneToMany(() => Blank, (blank) => blank.client)
	blanks: Blank[];

	@OneToMany(() => Receipt, (receipt) => receipt.client)
	receipts: Receipt;
}
