import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from './service/api-requests.service.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hide = true;
  loading = false;

  constructor(private apiRequests: ApiRequestsService) {

  }

  ngOnInit() {
    this.apiRequests.getAllDatas("members").toPromise().then(data => {
      console.log(data);
    });

  }

  async login(username, password) {
    this.loading = true;

    // console.log(`fields - ${username}, ${password}`);

    let body = {
      username: username,
      password: password
    };
    await this.apiRequests
      .login('members', body)
      .toPromise()
      .then(data => {
        console.log(`data - ${data}`);


      });
  }


}
