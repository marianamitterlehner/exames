import { request, response, Router} from 'express';
import {getRepository} from 'typeorm';

import ExamsController from '../app/controllers/ExamsController';
import  Exams from '../app/models/Exams';


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

examsRouter.get('/', async(request, response) => {
    const examsRopository = getRepository(Exams);
    const exam = await examsRopository.find();
    return response.json(exam); 
})

examsRouter.delete('/:id', async(request, response) => {
    const examsRopository = getRepository(Exams);
    const {id} = request.params;
    await examsRopository.delete(id);
    return response.send(); 
})


export default examsRouter;