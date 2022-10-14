import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddoner',
  templateUrl: './adddoner.component.html',
  styleUrls: ['./adddoner.component.css']
})
export class AdddonerComponent implements OnInit {

  constructor() { }

  donerName=""
  bloodGroup=""
  dateOfBirth=""
  lastDonationDate=""
  anyPreviousDiseases=""
  LastVaccinationDate=""
  address=""
  pincode=""
  mobile=""
  email=""

  readValues=()=>{
    let data={
    "donerName":this.donerName,
    "bloodGroup":this.bloodGroup,
    "dateOfBirth":this.dateOfBirth,
    "lastDonationDate":this.lastDonationDate,
    "anyPreviousDiseases":this.anyPreviousDiseases,
    "LastVaccinationDate":this.LastVaccinationDate,
    "address":this.address,
    "pincode":this.pincode,
    "mobile":this.mobile,
    "email":this.email
    }
    console.log(data)
  }


  ngOnInit(): void {
  }

}
