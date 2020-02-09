import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard.service';
import { AdminQuesComponent } from './admin-ques/admin-ques.component';

const routes: Routes = [
   /*{
    path: '',
    redirectTo : 'dashboard',
    pathMatch : 'full'

  },
  */	
	{
        path: 'home',
        component: HomeComponent
    },
    
    
  {
    path: '',
    component : AdminLayoutComponent,
    children : [{
      path: '',
      loadChildren: './admin-layout/admin-layout.module#AdminLayoutModule'
    }],
    //canActivate: [AuthGuard]

  },
{
    path: 'login',
    component: LoginComponent
},
{
  path: 'adminDash',
  component: AdminQuesComponent,
 // canActivate: [AuthGuard]
},
{ path: '**', redirectTo: '' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
