import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../services/machines.service';
import { Machines } from '../models/machines.model';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  machines:Machines[];
  constructor( private machineServices: MachinesService) { }

  ngOnInit() {
    this.machineServices.getMachines().subscribe(machines =>{
      this.machines = machines;
    });
    
  }

}
