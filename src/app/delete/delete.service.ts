import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class DeleteService {

  constructor(private _dele:Http) { }
  dele(urll) {
        return this._dele.delete(urll).map((res:Response) => res.json());
    }

}
