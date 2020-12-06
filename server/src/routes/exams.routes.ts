import { Router } from 'express';
import { getRepository } from 'typeorm';


import Exams from '../app/models/Exams';
import ExamsController from '../app/controllers/ExamsController';


const ExamsRouter = Router();

ExamsRouter.post('/', async (request, response) => {
    try{
        const { name } = request.body;
        const examsController = new ExamsController();

        const exams = await examsController.store({
            name,
        });
        return response.json(exams);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

ExamsRouter.get('/', async (request, response) => {
  const examsRepository = getRepository(Exams);
  const exams = await examsRepository.find();

  return response.json(exams);
});

  ExamsRouter.get('/:id',  async (request, response) => {
    const examsRepository = getRepository(Exams);
    const { id } = request.params;
    const exams = await examsRepository.findOne(id);
  
    return response.json(exams);
  });
  
  ExamsRouter.delete('/:id', async (request, response) => {
    const examsRepository = getRepository(Exams);
    const { id } = request.params;
  
    await examsRepository.delete(id);
  
    return response.send();
  });

export default ExamsRouter;