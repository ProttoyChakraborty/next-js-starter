import { Controller,Get,Post,Body, Delete, Patch } from "@nestjs/common";
import { PostService } from "./posts.service";
import { identity } from "rxjs";
import PostInterface from "./interfaces/post.interface";

// common REST api syntax 

// create -> POST /ticket/
// Get All -> Get /ticket/
// Get one -> Get /ticket/:id
// Update -> PATCH /ticket/:id , Body
// Delete -> DELETE /ticket/:id 


@Controller('ticket')
export class PostController{
    constructor(private readonly postService:PostService){}

    @Post()
    createPost(@Body(){message,user_id}:PostInterface){
        return this.postService.createPost(message,user_id);
    }

    @Get()
    getAllposts(){
        return this.postService.getAll();
    }

    @Patch()
    updatePost(@Body(){id,message}:Partial<PostInterface>){
        return this.postService.updatePost(id,message);
    }

    @Post("/like")
    addLike(@Body(){id}){
        return this.postService.addLike(id)
    }
}
