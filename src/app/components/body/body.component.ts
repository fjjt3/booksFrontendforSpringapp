import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  categories: any;
  arrCategories: any;

  constructor(private _categories: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this._categories.getCategories()
              .subscribe ( (respond: any) => {
                  this.categories = respond;
                  this.arrCategories = this.categories.categoryResponse.category;
                  console.log( this.arrCategories);
              })
  }

}
