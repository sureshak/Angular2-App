import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {
	sam;
	visible=false;
  constructor(private _listservice:ListService ) {}

  
	get_list(){
		this._listservice.getsample().subscribe(data => {this.sam=data[0];console.log(this.sam[0].id)})
		this.visible=true;
		
	}
	ngOnInit() {

    }

}
