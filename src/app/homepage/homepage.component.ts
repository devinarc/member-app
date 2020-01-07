import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from './../service/api-requests.service.';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private apiRequests: ApiRequestsService,

    private router: Router) {

  }
  myform: FormGroup;
  isEmpty = true;
  isSelected = false;
  isChosen = false;
  valid = true;
  locations = [];



  async ngOnInit() {
    await this.getLocations();

    if (this.locations.length > 0) {
      this.isEmpty = false;
    }

  }

  async getLocations() {
    await this.apiRequests.getAllLocations().toPromise().then(data => {
      data.forEach(element => {
        this.locations.push(element);
      });
    });
  }


  // ngOnInit() {
  //   this.apiRequests.getAllDatas("members").toPromise().then(data => {
  //     console.log(data);
  //     console.log(data[0].id)
  //     console.log(data[0].username)
  //     this.username = data[0].username;
  //     this.login(data[0].username, data[0].password);
  //   });

  // }

  // async login(username, password) {
  //   this.loading = true;

  //   // console.log(`fields - ${username}, ${password}`);

  //   let body = {
  //     username: username,
  //     password: password
  //   };
  //   console.log(JSON.stringify(body));

  //   await this.apiRequests
  //     .login('members', body)
  //     .subscribe(res => {
  //       console.log(res)
  //     })
  //   // await this.apiRequests
  //   //   .login('members', JSON.stringify(body))
  //   //   .toPromise()
  //   //   .then(data => {
  //   //     //console.log(`data - ${data}`);
  //   //     //console.log(data);


  //   //   });
  // }


}
