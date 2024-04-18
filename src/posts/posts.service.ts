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

    async updatePost(post_id:number,message:string,user_id?:string) : Promise<Post>{
        const updated=await this.postRepository.update(post_id,{message,user_id})
        console.log(updated)
        return this.postRepository.findOne({where:{id:post_id}});
    }

    async deletePost(post_id:number):Promise<void>{
        await this.postRepository.delete(post_id);
    }

    async addLike(post_id:number):Promise<void>{
        const post=  await this.postRepository.findOne({where:{id:post_id}})
        await this.postRepository.update(post_id,{like_count:post.like_count+1||1})
    }
}