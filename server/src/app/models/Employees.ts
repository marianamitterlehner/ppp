import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('employees')
  class Employees {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  }
  
  export default Employees;