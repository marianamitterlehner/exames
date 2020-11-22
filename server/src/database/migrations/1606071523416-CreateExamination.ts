import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateExamination1606071523416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'examinations',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'id_employee',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'id_exam',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'id_typeExam',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'dateExam',
                        type: 'timestamp',
                        default:'now()'
                    },
                ],
                foreignKeys:[
                    {
                        name: 'id_employee',
                        columnNames: ['id_employee'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'employees',
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                    {
                        name: 'id_exam',
                        columnNames: ['id_exam'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'exams',
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                    {
                        name: 'id_typeExam',
                        columnNames: ['id_typeExam'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'typeExams',
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                ]
            })
        )

       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('examinations')
    }

}
