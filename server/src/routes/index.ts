
import { Router } from 'express';

import doctorsRouter from './doctors.routes';
import employeesRouter from './employees.routes';

const routes = Router();

routes.use('/doctors', doctorsRouter);
routes.use('/employees', employeesRouter);

export default routes;