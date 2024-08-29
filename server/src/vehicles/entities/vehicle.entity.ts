import { Blank } from 'src/blanks/entities/blank.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  power: number;

  @Column()
  year: number;

  @OneToMany(() => Blank, (blank) => blank.vehicle)
  blanks: Blank;
}
