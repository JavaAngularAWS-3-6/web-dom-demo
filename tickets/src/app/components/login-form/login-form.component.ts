import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username : string = "";
  password: string = "";
  currentUser : User = this.authService.user;

  submit(){
    this.authService.login(this.username, this.password);
    this.currentUser = this.authService.user;
  }
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

}
