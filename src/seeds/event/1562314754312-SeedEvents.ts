import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { EventSeed } from "./event.seed";
import { Event } from '../../event/event.entity'

export class SeedEvents1562314754312 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const eventRepository = getRepository(Event);
        await eventRepository.save(EventSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
