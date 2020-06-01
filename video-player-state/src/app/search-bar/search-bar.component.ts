import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formattedVideo: string

  findVideo (url: string) {
   if (url.length <= 28) {
     this.formattedVideo = url.slice (17,28)
   } else {
     this.formattedVideo = url.slice(32,43)
   }

  }
}
