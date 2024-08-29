import { Blank } from 'src/blanks/entities/blank.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SellingPoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ nullable: true })
  comment: string;

  @OneToMany(() => Blank, (blank) => blank.client)
  blanks: Blank[];
}
