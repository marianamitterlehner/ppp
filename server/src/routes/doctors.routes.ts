import { Router } from 'express';
import { getRepository } from 'typeorm';


import Doctors from '../app/models/Doctors';
import DoctorsController from '../app/controllers/DoctorsController';


const DoctorsRouter = Router();

DoctorsRouter.post('/', async (request, response) => {
    try{
        const { name } = request.body;
        const doctorsController = new DoctorsController();

        const doctor = await doctorsController.store({
            name,
        });
        return response.json(doctor);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

DoctorsRouter.get('/', async (request, response) => {
  const doctorsRepository = getRepository(Doctors);
  const doctor = await doctorsRepository.find();

  return response.json(doctor);
});

  DoctorsRouter.get('/:id',  async (request, response) => {
    const doctorsRepository = getRepository(Doctors);
    const { id } = request.params;
    const doctor = await doctorsRepository.findOne(id);
  
    return response.json(doctor);
  });
  
  DoctorsRouter.delete('/:id', async (request, response) => {
    const doctorsRepository = getRepository(Doctors);
    const { id } = request.params;
  
    await doctorsRepository.delete(id);
  
    return response.send();
  });

export default DoctorsRouter;