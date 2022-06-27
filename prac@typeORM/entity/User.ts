import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"


@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: true })
    age: number;

    @Column()
    email: string;

    @Column()
    role: 'admin' | 'normal';
;
    
}