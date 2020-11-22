import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity('exams')
class Exams {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    shelf_life: Date;
}

export default Exams;