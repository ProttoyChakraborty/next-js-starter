import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { Comment } from "./comments.entity";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id:string;

    @Column()
    message: string;

    @Column({nullable:true})
    like_count: number;

    @OneToMany(()=> Comment,(comment)=>comment.post)
    comments: Comment[]
}