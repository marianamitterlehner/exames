import { request, response, Router} from 'express';
import {getRepository} from 'typeorm';

import ExaminationsController from '../app/controllers/ExaminationsController';
import Examinations from '../app/models/Examinations';

const examinationsRouter = Router();


examinationsRouter.post('/', async (request, response) => {
    try{
        const { id_employee, id_exam, id_typeExam } = request.body;
        const examinationsController = new ExaminationsController();

        const examination = await examinationsController.store({
            id_employee, id_exam, id_typeExam
        });

        return response.json(examination);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

examinationsRouter.get('/', async(request, response) => {
    const examinationsRopository = getRepository(Examinations);
    const examination = await examinationsRopository.find();
    return response.json(examination); 
})

examinationsRouter.delete('/:id', async(request, response) => {
    const examinationsRopository = getRepository(Examinations);
    const {id} = request.params;
    await examinationsRopository.delete(id);
    return response.send(); 
})


export default examinationsRouter;