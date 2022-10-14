import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdoner',
  templateUrl: './searchdoner.component.html',
  styleUrls: ['./searchdoner.component.css']
})
export class SearchdonerComponent implements OnInit {

  constructor() { }

  bloodGroup=""

  readValue=()=>{
    let data={
      "bloodGroup":this.bloodGroup
    }
    console.log(data)
  }
  

  ngOnInit(): void {
  }

}
