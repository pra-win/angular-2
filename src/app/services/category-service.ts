import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Constants } from '../common/constants';

@Injectable()
export class CategorService{
    private url = Constants.APIBaseUrl+"angularAppAPI/categorys";
    constructor(private _http:Http){}

    getCategories(): Observable<any> {
        return this._http.get(this.url)
            .map(res => res.json());
    }
}