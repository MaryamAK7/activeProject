export class CounterService{
    activecount:number=0;
    inactivecount:number=0;

    setActiveCount(){
        this.inactivecount++;
        console.log("Inactive to Active count: "+this.inactivecount);
    }

    setInactiveCount(){
        this.activecount++;
        console.log("Active to Inactive count: "+this.activecount);
    }
}