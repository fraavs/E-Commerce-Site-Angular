import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/home/services/category/category.service';
import { Category } from 'src/app/home/types/category.type';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService ) { }

  
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(category => {
      this.categoryList = category;
    })
  }
}
