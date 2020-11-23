import { Router } from 'express';
import { getRepository } from 'typeorm';


import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Administrator from '../app/models/Administrator';
import AdministratorController from '../app/controllers/AdministratorController';


const administratorRouter = Router();

administratorRouter.post('/', async (request, response) => {
    try{
        const { registration, password } = request.body;
        const administratorController = new AdministratorController();

        const administrator = await administratorController.store({
            registration,
            password
        });

        return response.json(administrator);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

administratorRouter.get('/', ensureAuthenticated, async (request, response) => {
  const administratorRepository = getRepository(Administrator);
  const administrator = await administratorRepository.find();

  // console.log(request.user);
  return response.json(administrator);
});
  
  administratorRouter.delete('/:id', ensureAuthenticated, async (request, response) => {
    const administratorRepository = getRepository(Administrator);
    const { id } = request.params;
  
    await administratorRepository.delete(id);
  
    return response.send();
  });

export default administratorRouter;