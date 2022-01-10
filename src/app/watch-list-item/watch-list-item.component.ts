import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {
  @Input() item;
  @Input() first;
  @Input() last;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  ngOnInit() {
  }

  moveUp() {
    this.up.emit();
  }

  moveDown() {
    this.down.emit();
  }


}