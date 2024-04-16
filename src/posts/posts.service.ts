import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./posts.entity";


@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
    ){};

    async createPost(message:string,user_id:string): Promise<Post>{
            const post= this.postRepository.create({message,user_id});
            return this.postRepository.save(post);
    }

    async getAll():Promise<Post[]>{
        return this.postRepository.find();
    }
}