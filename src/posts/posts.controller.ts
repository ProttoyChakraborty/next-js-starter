import { Controller,Get,Post,Body, Delete } from "@nestjs/common";
import { PostService } from "./posts.service";
import { identity } from "rxjs";
import PostInterface from "./interfaces/post.interface";

// common REST api syntax 

// create -> POST /posts/
// Get All -> Get /posts/
// Get one -> Get /posts/:id
// Update -> PATCH /posts/:id , Body
// Delete -> DELETE /posts/:id 


@Controller('posts')
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
}