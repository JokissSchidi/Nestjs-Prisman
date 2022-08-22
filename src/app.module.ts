import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './doc/post.service';
import { PrismaService } from './doc/prisma.service';
import { UserService } from './doc/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,UserService,PostService, PrismaService],
})
export class AppModule {}
