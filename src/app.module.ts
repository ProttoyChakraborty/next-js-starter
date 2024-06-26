import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts/posts.entity';
import { Comment } from './posts/comments.entity';
import { DatabaseModule } from './database.module';

@Module({
  imports: [PostsModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
