import {Tags} from './tags.model'
export class Machines{
    id:string;
    name:string;
    leasePrice:number;
    catagory:string;
    vendor:string;
    inventory:number;
    tags: Array<Tags>;
    
}
