import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getAnimals();
    console.log('Animals');
  }
  getAnimals(){
    this.rest.getAnimals().subscribe(res =>{
      console.log(res);
      this.animals = res.Animals;
    });
  }

}
