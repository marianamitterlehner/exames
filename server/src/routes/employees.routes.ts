import { Router} from 'express';
import {getRepository} from 'typeorm';
import multer from 'multer';

import EmployeesController from '../app/controllers/EmployeesController';
import Employees from '../app/models/Employees';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const employeesRouter = Router();

const upload = multer(uploadConfig);
/* Resolver o problema da foto */

employeesRouter.post('/', ensureAuthenticated, upload.single('photograph'), async (request, response) => {
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

employeesRouter.get('/', ensureAuthenticated, async(request, response) => {
    const employeesRopository = getRepository(Employees);
    const employee = await employeesRopository.find();
    return response.json(employee); 
})

export default employeesRouter;