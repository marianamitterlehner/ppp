import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePPP1607302766218 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'ppps',
              columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                  },
                  {
                    name: 'doctor_id',
                    type: 'uuid',
                    isNullable: true,
                  },
                  {
                    name: 'employee_id',
                    type: 'uuid',
                    isNullable: true,
                  },
                  {
                    name: 'exam_id',
                    type: 'uuid',
                    isNullable: true,
                  },
                  {
                    name: 'riskagent_id',
                    type: 'uuid',
                    isNullable: true,
                  },
                  {
                    name: 'photograph',
                    type: 'varchar',
                  },
                  {
                    name: 'description',
                    type: 'varchar',
                  },
              ],
            }),
          );
      
          await queryRunner.createForeignKey(
            'ppps',
            new TableForeignKey({
              columnNames: ['doctor_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'doctors',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
          await queryRunner.createForeignKey(
            'ppps',
            new TableForeignKey({
              columnNames: ['employee_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'employees',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
          await queryRunner.createForeignKey(
            'ppps',
            new TableForeignKey({
              columnNames: ['exam_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'exams',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
          await queryRunner.createForeignKey(
            'ppps',
            new TableForeignKey({
              columnNames: ['riskagent_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'riskagent',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ppps');
    }

}

