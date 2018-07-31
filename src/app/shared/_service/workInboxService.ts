/**
 * Created by Sravanthi on 3/14/2017.
 */
import{Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class workInboxService{
  URL = 'app/assests/workinbox.json';
  constructor(private http: Http) {}
  getEmpRecords(){
    return this.http.get(this.URL).map((res: Response) => res.json());
  }
  getWorkInboxRecords(url:any) {
    return this.http.get(url).map((res: Response) => res.json());
  }

}


