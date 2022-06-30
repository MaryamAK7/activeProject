import { Injectable } from "@angular/core";
import { CounterService } from "./CounterService.servivce";

@Injectable()
export class UserService{
    activeUsers = ['Max','Anna'];
    inactiveUsers = ['Maxim','Annabelle'];
    
    constructor(private counterService:CounterService){}

    onSetToInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1);
        this.counterService.setInactiveCount();
        
      }
      onSetToActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);
        this.counterService.setActiveCount();
     
      }
}