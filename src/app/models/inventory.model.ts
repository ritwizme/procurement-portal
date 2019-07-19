import {MachineId} from './machineId.model'
import {RemainingMachineId} from './remainingMachineId.model'

export class Inventory{

    sellerId: string;
    companyName: string;
    inventoryDescription: string;
    inventoryType: string;
    rent: number;
    rentType: string;
    inventoryCount: number;
    remainingInventoryCount: number;
    machineId: Array<MachineId>;
    remainingMachineId:Array<RemainingMachineId>;

}