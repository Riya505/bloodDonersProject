import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedoner',
  templateUrl: './deletedoner.component.html',
  styleUrls: ['./deletedoner.component.css']
})
export class DeletedonerComponent implements OnInit {

  constructor() { }

  id=""

  readValue=()=>{
    let data={
      "id":this.id
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
