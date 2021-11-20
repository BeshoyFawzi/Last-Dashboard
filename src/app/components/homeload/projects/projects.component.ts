import { Component, OnInit } from '@angular/core';
import {Project} from './../../../models/project'
import {ProjectService} from '../../../services/project.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
   projects:Project[]=[]


 

  constructor(private _ProjectService:ProjectService,private router: Router) {
    
  }
  ngOnInit(): void {
    this.getAllProjects()
  }
  getAllProjects(){
    this._ProjectService.getAllProjects().subscribe(projectlist=>{
this.projects=projectlist
    })
  };
  viewDetails(pId: number): void {
    this.router.navigate(['project-details', pId])
  }
  delete(id:number){
    this._ProjectService.deleteProject(id)
  }
}
