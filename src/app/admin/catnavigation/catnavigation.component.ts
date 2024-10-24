import { Component } from '@angular/core';
import { CategoryComponent } from '../components/category/category.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { ProductsComponent } from '../components/products/products.component';
import { UsersComponent } from '../components/users/users.component';



@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.css']
})
export class CatnavigationComponent {
  selectedComponent: any = DashboardComponent;

  selectComponent(component: string) {
    switch (component) {
      case 'dashboard':
        this.selectedComponent = DashboardComponent;
        break;
      case 'orders':
        this.selectedComponent = OrdersComponent;
        break;
      case 'products':
        this.selectedComponent = ProductsComponent;
        break;
      case 'category':
        this.selectedComponent = CategoryComponent;
        break;
      case 'users':
        this.selectedComponent = UsersComponent;
        break;
      default:
        this.selectedComponent = DashboardComponent;
    }
  }
}
