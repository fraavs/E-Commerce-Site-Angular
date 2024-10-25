import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/home/services/users/user-service.service';
import { user } from 'src/app/home/types/user.type';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: user[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      if (Array.isArray(response)) {
        this.userList = response as user[];
      } else {
        console.error('Invalid response format:', response);
      }
    });
  }
}
