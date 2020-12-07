import { getRepository } from 'typeorm';

import RiskAgents from '../models/RiskAgent';

interface Request {
  name: string;
}

class RiskAgentsController {
  public async store({ name }: Request): Promise<RiskAgents> {
    const riskAgentsRepository = getRepository(RiskAgents);

    const riskAgents = riskAgentsRepository.create({
      name
    });

    await riskAgentsRepository.save(riskAgents);

    return riskAgents;
  }
}

export default RiskAgentsController;