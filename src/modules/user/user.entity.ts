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
import { RoleType } from "./roletype.enum";
import { Status } from "../../shared/status.enum";
import { Award } from "../award/award.entity";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", unique: true, length: 20, nullable: false })
  username: string;

  @Column({ type: "varchar", nullable: false })
  email: string;

  @Column({ type: "varchar", nullable: false })
  password: string;

  @Column({ type: "varchar", length: 25, nullable: true })
  firstname: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  lastname: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  team: string;

  @Column({ type: "timestamp", name: "date_born", nullable: true })
  dateborn: Date;

  @Column({
    type: "varchar",
    length: 10,
    nullable: false,
    default: RoleType.STUDENT,
  })
  role: string;

  @Column({ type: "varchar", default: Status.ACTIVE, length: 8 })
  status: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date;

  @ManyToMany(
    (type) => Award,
    (award) => award.users,
    { eager: true, cascade: true }
  )
  @JoinTable({
    name: "user_awards",
    joinColumn: { name: "user_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "award_id", referencedColumnName: "id" },
  })
  awards: Award[];
}
