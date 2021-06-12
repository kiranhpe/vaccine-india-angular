import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeDiffService {
  constructor() {}

  timeDiffCalc(dateFuture: any, dateNow: any) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    return Math.floor(diffInMilliSeconds / 60) % 60;
  }
}
