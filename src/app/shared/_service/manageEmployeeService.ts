import{Component,OnInit,Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ManageEmployeeService{
  URL = 'app/assests/empdata.json';
  constructor(private http: Http) {}
  getEmpRecords(){
    return this.http.get(this.URL).map((res: Response) => res.json());
    // return this.http.get(this.URL).map((res: Response) => res.json())
  }

}


