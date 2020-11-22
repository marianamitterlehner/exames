import { Router} from 'express';

import ExamsController from '../app/controllers/ExamsController';


const examsRouter = Router();


examsRouter.post('/', async (request, response) => {
    try{
        const { name } = request.body;
        const employeesController = new ExamsController();

        const exam = await employeesController.store({
            name
        });

        return response.json(exam);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

export default examsRouter;