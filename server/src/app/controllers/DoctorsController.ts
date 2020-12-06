import { getRepository } from 'typeorm';

import Doctors from '../models/Doctors';

interface Request {
  name: string;
}

class DoctorsController {
  public async store({ name }: Request): Promise<Doctors> {
    const DoctorsRepository = getRepository(Doctors);

    const doctor = DoctorsRepository.create({
      name
    });

    await DoctorsRepository.save(doctor);

    return doctor;
  }
}

export default DoctorsController;