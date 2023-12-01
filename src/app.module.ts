import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { DiscordService } from './services/discord.service';

@Module({
  imports: [GithubModule],
  providers: [DiscordService],
})
export class AppModule {}
