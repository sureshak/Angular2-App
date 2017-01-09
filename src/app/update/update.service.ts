import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class UpdateService {

  constructor(private _put:Http) { }
   	 
 get_data(urll){
 	return Observable.forkJoin(this._put.get(urll).map((res1:Response) => res1.json()));
 }

 upda(urll,dat){
 		// console.log("Update service");
 		// console.log("inshkdas=>",dat);
          let headers      = new Headers({ 'Content-Type': 'application/json' });
          	// headers['Access-Control-Allow-Origin'] = '*';
          let options       = new RequestOptions({ headers: headers }); 

          return this._put.put(urll, dat, options)
                           .map((res:Response) => res.json())
                           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }   
}