import { AuthGuard } from './auth.guard';
import { ApiRequestsService } from './service/api-requests.service.';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from "@angular/material/datepicker";

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {

  MatCheckboxModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,


} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule

  ],
  providers: [ApiRequestsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
