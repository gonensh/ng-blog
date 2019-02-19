import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuRoutes = [
    { path: '/home', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contacts', name: 'Contacts' }
  ];
  @Input() hidePaths: string[];
  @Input() navItemStyle = 'button';

  constructor() {}

  ngOnInit() {
    if (this.hidePaths) {
      this.menuRoutes = this.menuRoutes.filter(route => {
        return !this.hidePaths.includes(route.path);
      });
    }
  }
}
