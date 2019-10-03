import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcom',
  templateUrl: './secondcom.component.html',
  styleUrls: ['./secondcom.component.css']
})
export class SecondcomComponent implements OnInit {
 
  childata:String;
  constructor() { }

  ngOnInit() {
  }

  childvalue(val){
 console.log("parent"+val);
 this.childata=val;
  }

}
