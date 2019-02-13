import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    fromEvent(
      document.querySelectorAll('app-menu a.nav-item'),
      'click'
    ).subscribe(e => {
      console.log(e);
    });
  }
}
