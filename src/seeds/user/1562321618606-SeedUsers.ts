import {MigrationInterface, QueryRunner} from "typeorm";
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.entity';
import { UserSeed } from "./user.seed";


export class SeedUsers1562321618606 implements MigrationInterface {
    constructor(
        private readonly userService: UserService) {}

    public async up(queryRunner: QueryRunner): Promise<any> {
        const promises = UserSeed.map((user: User) => this.userService.createUser(user))
        await Promise.all(promises);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}


