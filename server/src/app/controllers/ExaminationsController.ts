import {getRepository} from 'typeorm';

import Examinations from '../models/Examinations';

interface Request {
    id_employee:string;
    id_exam:string;
    id_typeExam: string;
}

class ExaminationsController {
    public async store({id_employee, id_exam, id_typeExam}: Request): Promise<Examinations> {
        const examinationsRepository = getRepository(Examinations);

        const employee = examinationsRepository.create({
            id_employee, id_exam, id_typeExam
        });

        await examinationsRepository.save(employee);
        return employee;
    }
}

export default ExaminationsController;