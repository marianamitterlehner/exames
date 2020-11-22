import { Router} from 'express';

import EmployeesController from '../app/controllers/EmployeesController';


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

export default employeesRouter;