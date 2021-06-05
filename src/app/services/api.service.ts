import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DASHBOARD_URL } from '../common/consts/API.constant';
import { Dashboard } from '../components/common/interfaces/dashboard';
import getTodayDate from '../utils/date';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getDashBoardData(state_id:string='', district_id:string = '', effectiveDate: string =getTodayDate()): Observable<Dashboard> {
    return this._http.get<Dashboard>(`${DASHBOARD_URL}${state_id}&district_id=${district_id}&date=${effectiveDate}`);
  }
}
