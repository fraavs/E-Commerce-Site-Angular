import { Component } from '@angular/core';
import { UserService } from 'src/app/home/services/users/user-service.service';
import { Router } from '@angular/router';
import { loginToken } from 'src/app/home/types/user.type';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private userService: UserService) { }
 
  logout(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
