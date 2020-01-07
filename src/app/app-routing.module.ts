import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';

const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'home', component: HomepageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }