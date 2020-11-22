import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import Employees from '../models/Employees';
import Exams from '../models/Exams';
import TypeExams from '../models/TypeExams';


@Entity('examinations')
class Examinations {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Employees)
    @JoinColumn({ name: 'id_employee' })
    id_employee: Employees;

    @ManyToOne(() => Exams)
    @JoinColumn({ name: 'id_exam' })
    id_exam: Exams;


    @ManyToOne(() => TypeExams)
    @JoinColumn({ name: 'id_typeExam' })
    id_typeExam: TypeExams;

    @Column()
    dateExam: Date;
}

export default Examinations;