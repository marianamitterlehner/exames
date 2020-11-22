import {response, Router} from 'express';

import employeesRouter from './employees.routes';
import examsRouter from './exams.routes'
import typeExamsRouter from './typeExam.routes'

const routes = Router();

routes.use('/employees', employeesRouter);
routes.use('/exams', examsRouter);
routes.use('/typeExams', typeExamsRouter);



export default routes;