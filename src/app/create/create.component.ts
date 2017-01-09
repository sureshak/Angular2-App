import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from './create-service.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	id;
	
  constructor(public _post:CreateServiceService,private router: Router) { }

  ngOnInit() {

  }
submitForm(form: any){

	     this._post.post_data(form).subscribe(data => console.log(data['id']));    
  }
  
}

