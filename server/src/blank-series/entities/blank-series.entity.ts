import { Blank } from 'src/blanks/entities/blank.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('blank_series')
export class BlankSeries {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@OneToMany(() => Blank, blank => blank.blankSeries)
	blanks: Blank
}
