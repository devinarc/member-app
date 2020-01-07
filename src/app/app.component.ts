import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from './service/api-requests.service.';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hide = true;
  loading = false;
  result = '';

  constructor(private apiRequests: ApiRequestsService, private router: Router) {

  }

  ngOnInit() {

    // this.apiRequests.getAllDatas("members").toPromise().then(data => {
    //   console.log(data);
    // });

  }




}
