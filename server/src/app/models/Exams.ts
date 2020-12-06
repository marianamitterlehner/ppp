import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('exams')
  class Exams {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  }
  
  export default Exams;