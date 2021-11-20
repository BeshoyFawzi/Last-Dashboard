import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit ,OnDestroy   {
 ProjectID:number=0
_project:Project|undefined;
private subscriptions: Subscription[]=[];
  constructor(private activatedRoute: ActivatedRoute,private _ProjectService:ProjectService) { }

  ngOnInit(): void {
   
    // let subscription:Subscription=this.activatedRoute.paramMap.subscribe(
    //   (paramMap)=>{
    //    this.ProjectID=Number(paramMap.get("pid"))
    //    this._project=this._ProjectService.getProjectByID(this.ProjectID)
    //   },
    //   (err)=>{
    //     console.log(err)
    //   }
    // )
    // this.subscriptions.push(subscription);
  }
  ngOnDestroy(): void {
    for(let sub of this.subscriptions)
      sub.unsubscribe();
   };
  //  Update(name:any,state:any,budget:any,description:any){
  //     this._project.project_name=name;
  //     this._project.state=state;
  //     this. _project.budget=budget;
  //     this._project.description=description;
  //   }
}
