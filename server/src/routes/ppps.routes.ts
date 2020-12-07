import { Router } from 'express';
import { getRepository } from 'typeorm';


import PPPS from '../app/models/PPPS';
import PPPSController from '../app/controllers/PPPSController';


const PPPSRouter = Router();

PPPSRouter.post('/', async (request, response) => {
    try{
        const { doctor_id, employee_id, exam_id, riskagent_id, photograph, description } = request.body;
        const pppsController = new PPPSController();

        const ppps = await pppsController.store({
            doctor_id, employee_id, exam_id, riskagent_id, photograph, description
        });
        return response.json(ppps);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

PPPSRouter.get('/', async (request, response) => {
  const pppsRepository = getRepository(PPPS);
  const ppps = await pppsRepository.find();

  return response.json(ppps);
});

  PPPSRouter.get('/:id',  async (request, response) => {
    const pppsRepository = getRepository(PPPS);
    const { id } = request.params;
    const ppps = await pppsRepository.findOne(id);
  
    return response.json(ppps);
  });
  
  PPPSRouter.delete('/:id', async (request, response) => {
    const pppsRepository = getRepository(PPPS);
    const { id } = request.params;
  
    await pppsRepository.delete(id);
  
    return response.send();
  });

export default PPPSRouter;