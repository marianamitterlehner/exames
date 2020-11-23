import { request, response, Router} from 'express';
import {getRepository} from 'typeorm';

import TypeExamsController from '../app/controllers/TypeExamController';
import  TypeExams from '../app/models/TypeExams';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const typeExamsRouter = Router();


typeExamsRouter.post('/', async (request, response) => {
    try{
        const { name } = request.body;
        const typeEmployeesController = new TypeExamsController();

        const typeExam = await typeEmployeesController.store({
            name
        });

        return response.json(typeExam);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

typeExamsRouter.get('/', ensureAuthenticated, async(request, response) => {
    const typeExamsRopository = getRepository(TypeExams);
    const typeExam = await typeExamsRopository.find();
    return response.json(typeExam); 
})

typeExamsRouter.delete('/:id', ensureAuthenticated, async(request, response) => {
    const typeExamsRopository = getRepository(TypeExams);
    const {id} = request.params;
    await typeExamsRopository.delete(id);
    return response.send(); 
})


export default typeExamsRouter;