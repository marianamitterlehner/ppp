import { Router } from 'express';
import { getRepository } from 'typeorm';


import Employees from '../app/models/Employees';
import EmployeesController from '../app/controllers/EmployeesController';


const EmployeesRouter = Router();

EmployeesRouter.post('/', async (request, response) => {
    try{
        const { name } = request.body;
        const employeesController = new EmployeesController();

        const employees = await employeesController.store({
            name,
        });
        return response.json(employees);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

EmployeesRouter.get('/', async (request, response) => {
  const EmployeesRepository = getRepository(Employees);
  const employees = await EmployeesRepository.find();

  return response.json(employees);
});

  EmployeesRouter.get('/:id',  async (request, response) => {
    const EmployeesRepository = getRepository(Employees);
    const { id } = request.params;
    const employees = await EmployeesRepository.findOne(id);
  
    return response.json(employees);
  });
  
  EmployeesRouter.delete('/:id', async (request, response) => {
    const EmployeesRepository = getRepository(Employees);
    const { id } = request.params;
  
    await EmployeesRepository.delete(id);
  
    return response.send();
  });

export default EmployeesRouter;