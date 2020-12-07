import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  import Doctors from './Doctors';
  import Employees from './Employees';
  import Exams from './Exams';
  import RiskAgent from './RiskAgent';
  
  @Entity('ppps')
  class PPPS {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Doctors)
    @JoinColumn({ name: 'doctor_id' })
    doctor_id: Doctors;
    
    @ManyToOne(() => Employees)
    @JoinColumn({ name: 'employee_id' })
    employee_id: Employees;

    @ManyToOne(() => Exams)
    @JoinColumn({ name: 'exam_id' })
    exam_id: Exams;

    @ManyToOne(() => RiskAgent)
    @JoinColumn({ name: 'riskagent_id' })
    riskagent_id: RiskAgent;
  
    @Column()
    photograph: string;

    @Column()
    description: string;
  }
  
  export default PPPS;