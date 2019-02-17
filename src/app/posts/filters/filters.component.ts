import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  categories: string[] = ['all', 'web', 'dev', 'design'];
  constructor() {}

  ngOnInit() {}
}