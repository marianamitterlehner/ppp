
import { Router } from 'express';

import doctorsRouter from './doctors.routes';
import employeesRouter from './employees.routes';
import examsRouter from './exams.routes';
import riskagentsRouter from './riskagent.routes';
import pppsRouter from './ppps.routes';

const routes = Router();

routes.use('/doctors', doctorsRouter);
routes.use('/employees', employeesRouter);
routes.use('/exams', examsRouter);
routes.use('/ppps', pppsRouter);

export default routes;