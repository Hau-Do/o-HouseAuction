import { House } from "./house";
export class Pagination {
	public first : boolean;
	public last : boolean;
	public totalPages : number;
	public totalElements : number;
	public size : number;
	public number : number;
	public sort : any;
	public content : Array<House>;

	constructor(first? : boolean, last? : boolean, totalPages? : number, totalElements? : number, size? : number, number? : number, sort? : any, content? : Array<House>){
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