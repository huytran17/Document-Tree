import { EntityRepository, Repository } from "typeorm";
import { Document } from "../entity";

@EntityRepository(Document)
export class DocumentRepository extends Repository<Document> {}
