import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WatchListService } from './watch-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  watchList = []
  maxItemsShown = 4;


  constructor(titleService: Title, private watchListService: WatchListService) {
    titleService.setTitle(this.watchList.length + ' items')
  }

  ngOnInit() {
    let watchListObs = this.watchListService.getWatchList() // this function returns an observable that contains the watchlist
    watchListObs.subscribe((response) => {
      console.log(response);
    })
  }

  moveItemUp(idx) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx-1];
    this.watchList[idx] = swap
    this.watchList[idx-1] = cur
  }

  moveItemDown(idx) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx+1];
    this.watchList[idx] = swap
    this.watchList[idx+1] = cur
  }

  showAll() {
    this.maxItemsShown = this.watchList.length;
  }

}
