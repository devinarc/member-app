import { LoginComponent } from './login/login.component';
import { ApiRequestsService } from './service/api-requests.service.';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  result: boolean = false;
  constructor(private loginComponent: LoginComponent) {
    this.result = loginComponent.isLoggedIn;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.result;
  }
}
