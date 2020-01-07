import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from './../service/api-requests.service.';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result = '';
  hide = true;
  private loggedInStatus: boolean = false;
  constructor(private apiRequests: ApiRequestsService, private router: Router) { }

  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    return this.loggedInStatus;
  }
  async login(username, password) {

    // console.log(`fields - ${username}, ${password}`);

    let body = {
      username: username,
      password: password
    };
    this.hide = false;

    await this.apiRequests
      .login('members', body)
      .subscribe(res => {
        this.result = res;
        if (this.result == 'Invalid Username/Password') {

        } else {
          this.loggedInStatus = true;
          this.router.navigate(['home']);
        }

        // this.result = res;
        // window.alert(res);
      });






  }

}
