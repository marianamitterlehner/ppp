import { getRepository } from 'typeorm';

import Exams from '../models/Exams';

interface Request {
  name: string;
}

class ExamsController {
  public async store({ name }: Request): Promise<Exams> {
    const examsRepository = getRepository(Exams);

    const exams = examsRepository.create({
      name
    });

    await examsRepository.save(exams);

    return exams;
  }
}

export default ExamsController;