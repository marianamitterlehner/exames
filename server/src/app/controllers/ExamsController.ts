import {getRepository} from 'typeorm';

import Exams from '../models/Exams';

interface Request {
    name:string;
}

class ExamsController {
    public async store({name}: Request): Promise<Exams> {
        const examsRepository = getRepository(Exams);

        const exam = examsRepository.create({
            name
        });

        await examsRepository.save(exam);
        return exam;
    }
}

export default ExamsController;