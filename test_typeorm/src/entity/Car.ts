import { Entity, PrimaryGeneratedColumn, Column, Transaction } from "typeorm";
import { type } from "os";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 150, unique: true })
    manufacturer: string;

    @Column({ default: 'gray' })
    color: string;

    // @Column('text')
    // description: string;

    @Column({ type: 'int' })
    year: number;

    @Column()
    isSold: boolean;
}