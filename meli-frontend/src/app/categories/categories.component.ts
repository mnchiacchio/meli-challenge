import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  
  @Input()
  categories: [string] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
