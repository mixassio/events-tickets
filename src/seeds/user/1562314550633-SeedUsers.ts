import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { UserSeed } from "./user.seed";
import { User } from '../../user/user.entity'


export class SeedUsers1562314550633 implements MigrationInterface 

{
    
    public async up(queryRunner: QueryRunner): Promise<any> {
        const userRepository = getRepository(User);
        await userRepository.save(UserSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }
}