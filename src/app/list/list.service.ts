import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class ListService {
constructor(private http:Http) { }  
  getsample() {

    return Observable.forkJoin(this.http.get('http://192.168.6.153:8000/bk/list/').map((res1:Response) => res1.json()));
  }
  }

  