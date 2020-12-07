import { Router } from 'express';
import { getRepository } from 'typeorm';


import RiskAgents from '../app/models/RiskAgent';
import RiskAgentsController from '../app/controllers/RiskAgentController';


const RiskAgentsRouter = Router();

RiskAgentsRouter.post('/', async (request, response) => {
    try{
        const { name } = request.body;
        const riskAgentsController = new RiskAgentsController();

        const riskAgents = await riskAgentsController.store({
            name,
        });
        return response.json(riskAgents);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

RiskAgentsRouter.get('/', async (request, response) => {
  const riskAgentsRepository = getRepository(RiskAgents);
  const riskAgents = await riskAgentsRepository.find();

  return response.json(riskAgents);
});

  RiskAgentsRouter.get('/:id',  async (request, response) => {
    const riskAgentsRepository = getRepository(RiskAgents);
    const { id } = request.params;
    const riskAgents = await riskAgentsRepository.findOne(id);
  
    return response.json(riskAgents);
  });
  
  RiskAgentsRouter.delete('/:id', async (request, response) => {
    const riskAgentsRepository = getRepository(RiskAgents);
    const { id } = request.params;
  
    await riskAgentsRepository.delete(id);
  
    return response.send();
  });

export default RiskAgentsRouter;