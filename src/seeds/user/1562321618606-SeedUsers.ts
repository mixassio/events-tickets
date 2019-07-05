import {MigrationInterface, QueryRunner} from "typeorm";
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.entity';
import { UserSeed } from "./user.seed";


export class SeedUsers1562321618606 implements MigrationInterface {
    constructor(
        private readonly userService: UserService) {}

    public async up(queryRunner: QueryRunner): Promise<any> {
        UserSeed.forEach(async (user: User) => await this.userService.createUser(user))
    
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}


