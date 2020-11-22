import {getRepository} from 'typeorm';

import TypeExams from '../models/TypeExams';

interface Request {
    name:string;
}

class TypeExamsController {
    public async store({name}: Request): Promise<TypeExams> {
        const typeExamsRepository = getRepository(TypeExams);

        const typeExam = typeExamsRepository.create({
            name
        });

        await typeExamsRepository.save(typeExam);
        return typeExam;
    }
}

export default TypeExamsController;