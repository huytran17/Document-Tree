import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Document } from "./entity";

(async () => await createConnection())();
