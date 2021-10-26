import { EntityRepository, Repository } from "typeorm";
import { Directory } from "../entity";

@EntityRepository(Directory)
export class DirectoryRepository extends Repository<Directory> {}
