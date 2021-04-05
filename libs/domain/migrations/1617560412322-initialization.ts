import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialization1617560412322 implements MigrationInterface {
  name = 'initialization1617560412322';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "organization" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "ownerId" integer, CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "account" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "access_token" ("id" character varying NOT NULL, "key" character varying NOT NULL, "accountId" integer, CONSTRAINT "PK_f20f028607b2603deabd8182d12" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "component_value" ("id" SERIAL NOT NULL, "value" json, "componentId" integer, CONSTRAINT "PK_b2248ad1937c3ddd3a976c3bb98" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "content" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "contentTypeId" integer, CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "content_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, CONSTRAINT "PK_897d132e80d29e6a50e458f9b06" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "component" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "config" json, "contentTypeId" integer, CONSTRAINT "PK_c084eba2d3b157314de79135f09" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "organization" ADD CONSTRAINT "FK_67c515257c7a4bc221bb1857a39" FOREIGN KEY ("ownerId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "access_token" ADD CONSTRAINT "FK_9bc0ab3621ac2e7f6ba2db05a51" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "component_value" ADD CONSTRAINT "FK_faaa9e109c703074d4c54913a0c" FOREIGN KEY ("componentId") REFERENCES "component"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "FK_fc5d23b531c9501ddcdd0ab45f5" FOREIGN KEY ("contentTypeId") REFERENCES "content_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "component" ADD CONSTRAINT "FK_6a081dd92cd51ae395226e8fd43" FOREIGN KEY ("contentTypeId") REFERENCES "content_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "component" DROP CONSTRAINT "FK_6a081dd92cd51ae395226e8fd43"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "FK_fc5d23b531c9501ddcdd0ab45f5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "component_value" DROP CONSTRAINT "FK_faaa9e109c703074d4c54913a0c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "access_token" DROP CONSTRAINT "FK_9bc0ab3621ac2e7f6ba2db05a51"`,
    );
    await queryRunner.query(
      `ALTER TABLE "organization" DROP CONSTRAINT "FK_67c515257c7a4bc221bb1857a39"`,
    );
    await queryRunner.query(`DROP TABLE "component"`);
    await queryRunner.query(`DROP TABLE "content_type"`);
    await queryRunner.query(`DROP TABLE "content"`);
    await queryRunner.query(`DROP TABLE "component_value"`);
    await queryRunner.query(`DROP TABLE "access_token"`);
    await queryRunner.query(`DROP TABLE "account"`);
    await queryRunner.query(`DROP TABLE "organization"`);
  }
}
