import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaStackedComponent } from './Highcharts/area-stacked/area-stacked.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './users/edit/edit.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from '../../user-auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
// import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent,children:[

    { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'Profile', component: ProfileComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project-details/:pid', component: ProjectDetailsComponent},

    {
      path: 'users', children: [
        { path: '', component: UsersComponent },
        { path: 'edit', component: EditComponent },
      ]
    },
  ],canActivate: [UserAuthGuard]},
//,canActivate: [UserAuthGuard]
]

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AsideNavComponent,
    DashboardComponent,
    ProfileComponent,
    UsersComponent,

    EditComponent,
    HomeComponent,
    AreaStackedComponent,
    ProjectsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    RouterModule.forChild(routes),
    HighchartsChartModule,
    MDBBootstrapModule,
    FormsModule,
    // BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers:[UserService],
  bootstrap: [HomeComponent]
})
export class HomeloadModule { }
