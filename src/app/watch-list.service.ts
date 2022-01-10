import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { WATCH_LIST } from './DATA';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  getWatchList() {
    return of(WATCH_LIST);
  }
}