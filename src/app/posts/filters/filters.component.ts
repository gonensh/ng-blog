import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  categories: string[] = ['All', 'Digital', 'Web', 'Print'];
  selectedCategory: string = this.categories[0];

  constructor() {}

  private selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
