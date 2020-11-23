import { Router, Request, Response } from 'express';
import SessionsController from '../app/controllers/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request:Request, response:Response) => {
  try{
    const { registration, password } = request.body;
    const sessionsController = new SessionsController();
    const { administrator, token } = await sessionsController.store({
      registration,
        password,
    });

    return response.json({ administrator, token });

  } catch(erro){
    return response.status(400).json({erro: erro.message})
  }  

});

export default sessionsRouter;