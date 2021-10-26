import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";
import { Document } from "./Document";

@Entity()
export class Directory {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	label: string;

	@ManyToOne((type) => Directory)
	@JoinColumn({ name: "parent_id", referencedColumnName: "id" })
	parent: Directory;

	@OneToMany((type) => Document, (document) => document.directories)
	documents: Document;

	@CreateDateColumn({ name: "created_at", update: false })
	createdAt?: number;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt?: number;
}
