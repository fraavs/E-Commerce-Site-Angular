import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { CartStoreItem } from "../home/services/cart/cart.storeItem";
import { CategoryService } from "../home/services/category/category.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from "../home/services/users/user-service.service";
import { ProductsService } from "../home/services/product/products.service";
import { OrderService } from "../home/services/order/order.service";


@NgModule({
    declarations: [
        AdminComponent,
        HeaderComponent,
        CatnavigationComponent,
        DashboardComponent,
        OrdersComponent,
        ProductsComponent,
        CategoryComponent,
        UsersComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
        HttpClientModule,
        RouterModule,
        AdminRoutingModule,
    ],
    providers: [
        CategoryService,
        CartStoreItem,
        UserService,
        ProductsService,
        CategoryService,
        OrderService,
    ]
})

export class AdminModule { }