import { Component, OnInit, Input } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { AppState, AppModel } from '../state/app.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit{
    @Select(AppState.getState) appStateObservable: Observable<AppModel>

    constructor(private store: Store) {}

    appState: AppModel;

    setState() {
      this.appStateObservable.subscribe(x => this.appState = x);
    }

    ngOnInit() {
        const tag = document.createElement('script');
    
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        this.setState();
    }
}
