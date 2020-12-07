import { getRepository } from 'typeorm';

import PPPS from '../models/PPPS';

interface Request {
    doctor_id:string;
    employee_id: string;
    exam_id:string;
    riskagent_id: string;
    photograph: string;
    description: string;
}

class PPPSController {
  public async store({ doctor_id, employee_id, exam_id, riskagent_id, photograph, description}: Request): Promise<PPPS[]> {
    const pppsRepository = getRepository(PPPS);

    const ppp = pppsRepository.create({
        doctor_id, employee_id, exam_id, riskagent_id, photograph, description
    });

    await pppsRepository.save(ppp);

    return ppp;
  }
}

export default PPPSController;