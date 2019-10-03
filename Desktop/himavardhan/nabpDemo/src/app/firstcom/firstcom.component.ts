import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-firstcom',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {

@Output('chiddata') dsta_par=new EventEmitter();

seletedValue:String;

  data=[ { "city": "Hyd", "state": "bb", "country": "ccc" }, { "city": "cincin", "state": "bb", "country": "ccc" }, { "city": "SFO", "state": "bb", "country": "ccc" } ]
  constructor() { }

  ngOnInit() {
    
   
 

  }

  callchange(val){
     console.log(val);
    this.dsta_par.emit(val);
  }

}
