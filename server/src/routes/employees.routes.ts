import { Router} from 'express';
import {getRepository} from 'typeorm';


import EmployeesController from '../app/controllers/EmployeesController';
import Employees from '../app/models/Employees';

const employeesRouter = Router();


employeesRouter.post('/', async (request, response) => {
    try{
        const { name, cpf, occupation, telephone, email, photograph } = request.body;
        const employeesController = new EmployeesController();

        const employee = await employeesController.store({
            name, cpf, occupation, telephone, email, photograph
        });

        return response.json(employee);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

employeesRouter.get('/', async(request, response) => {
    const employeesRopository = getRepository(Employees);
    const employee = await employeesRopository.find();
    return response.json(employee); 
})

export default employeesRouter;