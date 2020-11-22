import {getRepository} from 'typeorm';

import Employees from '../models/Employees';

interface Request {
    name:string;
    cpf:string;
    occupation: string;
    telephone: string;
    email: string;
    photograph: string;
}

class EmployeesController {
    public async store({name, cpf, occupation, telephone, email, photograph}: Request): Promise<Employees> {
        const employeesRepository = getRepository(Employees);

        const employee = employeesRepository.create({
            name, cpf, occupation, telephone, email, photograph
        });

        await employeesRepository.save(employee);
        return employee;
    }
}

export default EmployeesController;