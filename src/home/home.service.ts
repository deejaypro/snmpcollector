import { HttpService } from '../core/http.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

declare var _:any;

@Injectable()
export class HomeService {

    constructor(public httpAPI: HttpService) {
        console.log('Task Service created.', httpAPI);
    }

    userLogout() {
        return this.httpAPI.post('/logout','',null,true)
        .map( (responseData) => true);
    }

    getInfo() {
        // return an observable
        return this.httpAPI.get('/api/rt/agent/info/version/')
        .map( (responseData) => responseData.json())
    }

    reloadConfig() {
        return this.httpAPI.get('/api/rt/agent/reload/')
        .map( (responseData) =>  responseData.json());
    }
}
