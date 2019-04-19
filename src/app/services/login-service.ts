import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Constants } from '../common/constants';

// const httpOptions = {
//     headers: new Headers({
//       'Content-Type':  'text/json',
//       'Authorization': 'my-auth-token'
//     }),
//     responseType: ResponseContentType.Json,
//     withCredentials: false
//   };

@Injectable()
export class LoginService{
    private url = Constants.APIBaseUrl+"angularAppAPI/login";
    private body = "userId=test&password=pass";
    constructor(private _http:Http){}
    login(data:any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(
            this.url, data, options)
            .map(res => res.json());
    }

    errorHandler(error:Response){
        console.log(error);
        return Observable.throw(error);
        
    }
}
