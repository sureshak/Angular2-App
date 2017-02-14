import { Component, OnInit } from '@angular/core';
import { DeleteService } from './delete.service';

		@Component({
		  selector: 'app-delete',
		  templateUrl: './delete.component.html',
		  styleUrls: ['./delete.component.css']
		})
export class DeleteComponent implements OnInit {
del;
succ=false;
  constructor(public delee:DeleteService) { }

  ngOnInit() {}
gett(){
	this.delee.dele("http://127.0.0.1:8000/bk/rud/"+this.del+"/").subscribe(data =>{console.log(data)})
	this.succ=true;
	this.del="";
}
}
