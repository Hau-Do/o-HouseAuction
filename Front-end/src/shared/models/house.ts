export class House {
   
    public _id : string;
    public address: string;
    public area : number;
    public sessionEnd : boolean;
    public bidStates : Array<object>;
    public createdDate : Date;
    public endDate : Date;
    public timeLeft : Date;
    public displayTimeLeft : any;
    public startPrice : number;
    public endPrice : number;
    public owner : string;
    public info : object;
    public type : string;
    public avatar : string;


    constructor(_id? : string, address? : string, area? : number, sessionEnd? : boolean, bidStates? : Array<object>, createdDate? : string, endDate? : string, startPrice? : number, endPrice? : number, owner? : string) {
        this._id = "";
        this.address = "";
        this.area = 0;
        this.sessionEnd = false;
        this.bidStates = [];
        this.createdDate = new Date();
        this.endDate = new Date();
        this.timeLeft = new Date(+this.endDate - +this.createdDate);
        this.displayTimeLeft = [];
        this.startPrice = 0;
        this.endPrice = 0;
        this.owner = "";
        this.info = {
            beds : 0,
            baths : 0,
            sqMeter : 0
        };
        this.type = "";
        this.avatar = "./assets/images/no-image.jpg";
    }
} 