import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/home/services/order/order.service';
import { Order } from 'src/app/home/types/order.type';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      orders => this.orders = orders,
      error => console.error(error)
    )
  }

}
