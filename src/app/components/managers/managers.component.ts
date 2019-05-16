import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
  manager = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getManager;
  }
  getManager(){
    this.rest.getAnimals().subscribe(res=>{
      this.manager = res.Manager;
    });
  }

}
