import { Component, OnInit } from '@angular/core';
import { Animal, Cat, Dog} from '../../class/animal';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  animals : any[];
  meo = new Cat("Tom","Vang");
  cho = new Dog("Rex", "Black");
  name_m : string;
  color_m : string;
  name_c : string;
  color_c : string;
  constructor() { }

  ngOnInit() {
    this.animals = [];
    this.animals.push(this.meo,this.cho);
    this.meo.voice();
    this.cho.voice();
    console.log("ten meo",this.meo);
  }
  change_meo(){
    this.meo.set_name(this.name_m);
    this.meo.set_color(this.color_m);
    this.animals = [];
    this.animals.push(this.meo,this.cho);
  }
  change_cho(){
    this.cho.set_name(this.name_c);
    this.cho.set_color(this.color_c);
    this.animals = [];
    this.animals.push(this.meo,this.cho);
  }
}
