import {response, Router} from 'express';

import employeesRouter from './employees.routes';
import examsRouter from './exams.routes'
import typeExamsRouter from './typeExam.routes'
import examinationsRouter from './examinations.routes'

const routes = Router();

routes.use('/employees', employeesRouter);
routes.use('/exams', examsRouter);
routes.use('/typeExams', typeExamsRouter);
routes.use('/examinations', examinationsRouter);



export default routes;