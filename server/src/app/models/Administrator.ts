import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('administrator')
class Administrator {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    registration: string;

    @Column()
    password: string;
}

export default Administrator;