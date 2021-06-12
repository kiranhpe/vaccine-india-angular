import { Injectable } from '@angular/core';
import { Dashboard } from '../components/common/interfaces/dashboard';
import { TimeDiffService } from './time-diff.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private timeService: TimeDiffService) {}

  isDataAvailable() {
    const data = localStorage.getItem('API_DATA');
    return data ? true : false;
  }

  setData(key: string, value: string) {
    localStorage.setItem(key, value);
    localStorage.setItem('LAST_UPDATED',JSON.stringify(Date.now()))
  }
  getData(key: string): string {
    return localStorage.getItem(key) || '';
  }

  isDataOld() {
    return this.timeService.timeDiffCalc(Date.now(), new Date(+(localStorage.getItem('LAST_UPDATED') || "0"))) > 10;
  }
}