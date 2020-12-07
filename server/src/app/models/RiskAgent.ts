import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('riskagent')
  class RiskAgents {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  }
  
  export default RiskAgents;