import { Component, OnInit, Input } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit{
    @Input() url: string;
    public videoId: string;

    ngOnInit() {
        const tag = document.createElement('script');
    
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}
