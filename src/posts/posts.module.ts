import { Module } from '@nestjs/common';
import { PostController } from './posts.controller';
import { PostService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Post])],
    controllers:[PostController],
    providers:[PostService]
})
export class PostsModule {}
