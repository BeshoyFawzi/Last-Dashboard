import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './user-auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ProfileComponent } from './components/profile/profile.component';
// import { UsersComponent } from './components/users/users.component';
// import { ListComponent } from './components/users/list/list.component';
// import { EditComponent } from './components/users/edit/edit.component';

// import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  // { path: 'LogIn', component: LogInComponent },
  // { path: '', redirectTo: 'LogIn', pathMatch: 'full' },
  {
    path: 'dash', 
    loadChildren: () => import('./components/homeload/homeload.module').then(m => m.HomeloadModule)
  },
  { path: '', redirectTo: 'dash/home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
