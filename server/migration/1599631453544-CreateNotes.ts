import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateNotes1599631453544 implements MigrationInterface {
    name = 'CreateNotes1599631453544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "note"`);
    }

}
