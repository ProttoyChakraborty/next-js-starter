import { Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToOne } from "typeorm";
import { Post } from "./posts.entity";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @Column()
    user_id: string;

    @ManyToOne(()=>Post,(post)=>post.comments)
    post: Post
}