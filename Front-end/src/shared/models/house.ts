export class House {
   
    protected _id : string;
    protected address: string;
    protected area : number;
    protected sessionEnd : boolean;
    protected bidStates : Array<object>;
    protected createdDate : string;
    protected endDate : string;
    protected startPrice : number;
    protected endPrice : number;
    protected owner : string;


    constructor(_id? : string, address? : string, area? : number, sessionEnd? : boolean, bidStates? : Array<object>, createdDate? : string, endDate? : string, startPrice? : number, endPrice? : number, owner? : string) {
        this._id = "";
        this.address = "";
        this.area = 0;
        this.sessionEnd = false;
        this.bidStates = [];
        this.createdDate = (new Date()).toISOString();
        this.endDate = (new Date()).toISOString();
        this.startPrice = 0;
        this.endPrice = 0;
        this.owner = "";
    }
} 