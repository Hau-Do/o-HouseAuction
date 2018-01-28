export class Account {
	protected _id : string;
	protected username : string;
	protected password : string;
	protected role : Array<string>;

	constructor (_id? : string, username? : string, password? : string){
		this._id = _id || "";
		this.username = username || "";
		this.password = password || "";
	}
}