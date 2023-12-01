import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';

@Module({
  imports: [GithubModule, GithubModule],
  controllers: [AppController, GithubController],
  providers: [AppService, GithubService],
})
export class AppModule {}
