import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";
import { Directory } from "./Directory";

@Entity()
export class Document {
	@PrimaryGeneratedColumn()
	id: number;

	@Column("varchar")
	label: string;

	@Column("text")
	content: string;

	@ManyToOne((type) => Document)
	@JoinColumn({ name: "parent_id", referencedColumnName: "id" })
	parent: Document;

	@ManyToOne((type) => Directory, (directory) => directory.documents)
	directories: Directory;

	@CreateDateColumn({ name: "created_at", update: false })
	createdAt?: number;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt?: number;
}
