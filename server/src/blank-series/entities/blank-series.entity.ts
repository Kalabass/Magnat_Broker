import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('blank_series')
export class BlankSeries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
