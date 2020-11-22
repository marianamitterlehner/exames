import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateEmployee1605987383000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'employees',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                    },
                    {
                        name: 'occupation',
                        type: 'varchar',
                    },
                    {
                        name: 'telephone',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'photograph',
                        type: 'varchar',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('employees')
    }

}
