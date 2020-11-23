import {getRepository} from 'typeorm';
import { hash } from 'bcryptjs';

import Administrator from '../models/Administrator';

interface Request {
    registration:string;
    password:string;
}

class AdministratorController {
    public async store({registration, password}: Request): Promise<Administrator> {
        const administratorRepository = getRepository(Administrator);

        const checkUserExist = await administratorRepository.findOne({
            where: { registration },
          });
      
          if (checkUserExist) {
            throw new Error('Essa matricula já é cadastrada.');
          }
      
          const hashedPassword = await hash(password, 8);

        const administrator = administratorRepository.create({
            registration, password:hashedPassword
        });

        await administratorRepository.save(administrator);
        return administrator;
    }
}

export default AdministratorController;