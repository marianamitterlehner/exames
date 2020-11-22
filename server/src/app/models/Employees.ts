import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('employees')
class Employees {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    occupation: string;

    @Column()
    telephone: string;

    @Column()
    email: string;

    @Column()
    photograph: string;
}

export default Employees;