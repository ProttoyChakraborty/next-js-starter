import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./posts/posts.entity";
import { Comment } from "./posts/comments.entity";
@Module({
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host:'aws-0-ap-south-1.pooler.supabase.com',
        port:5432,
        username:'postgres.cngrdchvrcmbvcbrshtz',
        password:'Vd4CceF!yvgW',
        database:'postgres',
        entities:[Post,Comment],
        synchronize:true,
      })],
})
export class DatabaseModule{};