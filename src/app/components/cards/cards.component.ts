import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  invenoryId
  constructor() { }

  ngOnInit() {

    var retrivedId=localStorage.getItem("currentId")
    var newId=JSON.parse(retrivedId)
    console.log(newId)
  }



}
