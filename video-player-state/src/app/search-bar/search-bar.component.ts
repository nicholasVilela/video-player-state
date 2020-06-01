import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AppState, AppModel } from '../state/app.state';
import { Observable } from 'rxjs';
import { UpdateVideoId } from '../actions/app.action';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Select(AppState.getState) appStateObservable: Observable<AppModel>;

  constructor(private store: Store) { }

  appState: AppModel

  ngOnInit(): void {
    this.appStateObservable.subscribe(x => this.appState = x);
  }

  findVideo (url: string) {
   if (url.length <= 28) {
     const formattedVideo = url.slice (17,28);

     this.store.dispatch(new UpdateVideoId(formattedVideo));
   } else {
     const formattedVideo = url.slice(32,43);

     this.store.dispatch(new UpdateVideoId(formattedVideo));
   }

  }
}
