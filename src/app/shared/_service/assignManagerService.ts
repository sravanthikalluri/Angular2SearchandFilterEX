/**
 * Created by Sravanthi on 3/27/2017.
 */
import{Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class assignManagerService{
  URL = 'app/assests/assignManager.json';
  constructor(private http: Http) {}
  getEmpRecords(){
    return this.http.get(this.URL).map((res: Response) => res.json());
  }
}
