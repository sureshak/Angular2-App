import {Http, Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class CreateServiceService {
constructor(private http:Http) { }  
  post_data(body) {
		 let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers });

        return this.http.post("http://192.168.6.153:8000/bk/list/", body, options) // ...using post request
                         .map((res:Response) => res.json())
    }   

  }
  
