import { Component, OnInit } from '@angular/core';
import { GetInventoryService } from '../../services/get-inventory.service'
import { Inventory } from '../../models/inventory.model'
import {Router} from "@angular/router"

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory: Inventory[];

  constructor(private inventoryService:GetInventoryService, private router:Router) { }

  ngOnInit() {
    this.inventoryService.getInventory().subscribe(inventory=>{
      this.inventory=inventory;
      console.log(inventory)

  
    })
  }
  getId(event){
    //var inventoryId  = document.getElementById("inventoryId")
    //var inventoryId2 = this.stripHtml(inventoryId)
    //localStorage.setItem("currentId",JSON.stringify(inventoryId))
    //console.log(inventoryId2)
    //console.log(inventoryId)
    //this.router.navigate(['/index'])
    var inventoryId =event.target.id
    console.log(inventoryId)
    localStorage.setItem("currentId",JSON.stringify(inventoryId))
    this.router.navigate(['/createBid'])
  }

  getLeaseId(event){
    var inventoryId =event.target.id
    console.log(inventoryId)
    localStorage.setItem("currentId",JSON.stringify(inventoryId))
    this.router.navigate(['/leaseForm'])
  }

  stripHtml(html){
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

}
