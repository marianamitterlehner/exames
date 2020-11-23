import {response, Router} from 'express';

import employeesRouter from './employees.routes';
import examsRouter from './exams.routes'
import typeExamsRouter from './typeExam.routes'
import examinationsRouter from './examinations.routes'
import administratorRouter from './administrator.routes'
import sessionsRouter from './session.routes';

const routes = Router();

routes.use('/employees', employeesRouter);
routes.use('/exams', examsRouter);
routes.use('/typeExams', typeExamsRouter);
routes.use('/examinations', examinationsRouter);
routes.use('/administrator', administratorRouter);
routes.use('/sessions', sessionsRouter);

export default routes;