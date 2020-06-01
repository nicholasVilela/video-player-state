import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {NgxsModule} from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoPlayerComponent } from './Video Player/video-player.component';
import { AppState } from './state/app.state';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    NgxsModule.forRoot([
      AppState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }