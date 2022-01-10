import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WatchListItemComponent } from './watch-list-item/watch-list-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WatchListItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
