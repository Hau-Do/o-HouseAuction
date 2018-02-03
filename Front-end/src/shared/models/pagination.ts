export class pagination {
	protected first : boolean;
	protected last : boolean;
	protected totalPages : number;
	protected totalElements : number;
	protected size : number;
	protected number : number;
	protected sort : any;
	protected content : Array<object>;

	constructor(first? : boolean, last? : boolean, totalPages? : number, totalElements? : number, size? : number, number? : number, sort? : any, content? : Array<object>){
		this.first = first === null ? true : first;
		this.last = last === null ? true : last;
		this.totalElements = totalElements === null ? 0 : totalElements;
		this.totalPages = totalPages === null ? 0 : totalPages;
		this.size = size === null ? 0 : size;
		this.number = number === null ? 0 : number;
		this.sort = sort || null;
		this.content = content || [];
	}
}