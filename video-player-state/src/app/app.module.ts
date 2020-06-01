import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './Video Player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
