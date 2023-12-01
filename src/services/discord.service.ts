import { Injectable } from '@nestjs/common';
import fetch from "node-fetch";

@Injectable()
export class DiscordService {

  private readonly discordWebhookUrl = 'https://discord.com/api/webhooks/1179948687275872286/3nxmh3LuoyXneZUaivmNU-WZCD-K_NWEBoq50xatGR9Jfiggs-QpZPtz9KI3k4baqQrh';


  async notify( message: string ) {

    const body = {
      content: message,
    }


    const resp = await fetch( this.discordWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( body ),
    } );

    if ( !resp.ok ) {
      console.log( 'Error sending message to discord' );
      return false;
    }

    return true;


  }


}