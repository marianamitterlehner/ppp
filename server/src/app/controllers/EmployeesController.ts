import { getRepository } from 'typeorm';

import Employees from '../models/Employees';

interface Request {
  name: string;
}

class EmployeesController {
  public async store({ name }: Request): Promise<Employees> {
    const EmployeesRepository = getRepository(Employees);

    const employees = EmployeesRepository.create({
      name
    });

    await EmployeesRepository.save(employees);

    return employees;
  }
}

export default EmployeesController;