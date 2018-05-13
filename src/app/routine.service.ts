import { Injectable } from '@angular/core';
import { Routine } from './interfaces/routine';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RoutineService {
    routineLIbrary: Routine[];

    constructor(private _http: HttpClient, private _e: EndpointService) {
        //TODO: check local storage for user's library, set it if found
        // else: this.routineLibrary = this.getUserRoutines();
    }

    //TODO: Get the users library and store it locally
    getUserRoutines(userId: string): Observable<Routine[]> {
        let url: string = this._e.getLibraryUrl(userId);

        return this._http.get<Routine[]>(url)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse): Observable<Routine[]> {
        console.log(err.message);
        return Observable.throw(err.message);
    }

    getRoutineById(routineId: string): Routine {
        return routineId[routineId];
    }
}
