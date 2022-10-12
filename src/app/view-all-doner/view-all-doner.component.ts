import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-doner',
  templateUrl: './view-all-doner.component.html',
  styleUrls: ['./view-all-doner.component.css']
})
export class ViewAllDonerComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewUser().subscribe(
      (data)=>{
        this.donerData=data
      }
    )
  }

  donerData:any=[]

  ngOnInit(): void {
  }

}
