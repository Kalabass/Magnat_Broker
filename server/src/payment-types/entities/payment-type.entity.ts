import { Blank } from 'src/blanks/entities/blank.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentType {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(() => Blank, (blank) => blank.paymentType)
	blanks: Blank[];
}
