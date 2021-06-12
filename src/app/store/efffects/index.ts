import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { APISuccess, setDataForDashboard } from '../actions';

@Injectable()
export class DashboardEffects {

  loadDashboard$ = createEffect(() => this.actions$.pipe(
    ofType(setDataForDashboard),
    mergeMap(() => this.dataService.getDashBoardData()
      .pipe(
        map(data => (APISuccess({dashboardData: data}))),
        catchError(() => of({type: '[Dashaboard API] Dashboard Loaded Error'}))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: ApiService
  ) {}
}