import { Body, Controller, Post, Headers } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post( '/' )
  webhookHandler(
    @Headers( 'x-github-event' ) githubEvent: any,
    @Headers('X-Hub-Signature-256') signature: string,
    @Body() body: any,
  ) {

    console.log({ signature  }, githubEvent);


    // console.log({ githubEvent });
    this.githubService.handlePayload( githubEvent, body );


    return {  githubEvent }
  }
}
