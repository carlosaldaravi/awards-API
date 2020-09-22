import { Status } from "../../shared/status.enum";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../user/user.entity";

@Entity("awards")
export class Award extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", unique: true, length: 50, nullable: false })
  name: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ type: "int", nullable: false })
  points: number;

  @Column({ type: "varchar", length: 20 })
  type: string;

  @Column({ type: "varchar", length: 20 })
  subtype: string;

  @Column({ type: "int", nullable: false })
  order: number;

  @Column({ type: "varchar", default: Status.ACTIVE, length: 8 })
  status: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date;

  @ManyToMany(
    (type) => User,
    (user) => user.awards
  )
  @JoinTable({
    name: "user_awards",
    joinColumn: { name: "award_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "user_id", referencedColumnName: "id" },
  })
  users: User[];
}
