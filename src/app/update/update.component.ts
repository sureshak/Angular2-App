import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UpdateService} from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
Update;
stri;ID;Name;Email;Mobile;Pincode;Passwd;sa;
// 
   constructor(private _put:UpdateService,private _rout:Router) { }

  ngOnInit() {

  }
visible = false;
update = false;
visi=false;
succ=false;
toggle() {
    this.visible = !this.visible;
    this.update=true;

  }
fill(s){
	this.ID=s[0]['id'];
	this.Name=s[0]['Name']
	this.Email=s[0]['Email']
	this.Mobile=s[0]['Mobile']
	this.Pincode=s[0]['Pincode']
// console.log(s[0]['Name'])
}
gett(){

	// console.log("Feting data via api");
this._put.get_data("http://192.168.6.153:8000/bk/rud/"+this.Update).subscribe(data => {this.stri=data;this.toggle();this.fill(this.stri)})

}
tog() {
    this.visible=false;
    this.visi = true;
  }

UpdateForm(form){
	this.sa=form;
	// console.log("UpdateFrom");
	// console.log("Enetreed form:",this.sa);
	// console.log(form);
	// console.log(form["Pincode"]);
	this.tog()

}
updatee(){
	// console.log("inside call api");
	// console.log("Enter pasword:",this.Passwd,"original password",this.stri[0]["Password"]);
	if(this.stri[0]["Password"]==this.Passwd){
	
	this.sa["Password"]=this.Passwd
	// console.log(this.sa);
	this._put.upda("http://192.168.6.153:8000/bk/rud/"+this.Update+"/",this.sa).subscribe(d =>{console.log();this.succ=true;
	this.visible=false;
	this.visi=false;})
	// console.log("sucess");
	
	
	}
	else{
		console.log("Failed!!!!");
	}

}
}


