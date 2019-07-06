import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { TicketSeed } from "./ticket.seed";
import { Ticket } from '../../ticket/ticket.entity'

export class SeedTickets1562314776906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const ticketRepository = getRepository(Ticket);
        await ticketRepository.save(TicketSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
