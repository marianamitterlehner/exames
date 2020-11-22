import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('typeExams')
class TypeExams {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}

export default TypeExams;