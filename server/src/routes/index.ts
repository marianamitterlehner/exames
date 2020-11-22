import {response, Router} from 'express';

import employeesRouter from './employees.routes';
import examsRouter from './exams.routes'

const routes = Router();

routes.use('/employees', employeesRouter);
routes.use('/exams', examsRouter);

export default routes;