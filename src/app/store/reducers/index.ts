import { createReducer, on } from '@ngrx/store';
import { Dashboard } from 'src/app/components/common/interfaces/dashboard';
import { APISuccess } from '../actions';

export const initialState: any = null;

const _dashboardReducer = createReducer(
  initialState,
  on(APISuccess, (state, { dashboardData }) => dashboardData)
);

export function dashboardReducer(state: Dashboard, action: any) {
  return _dashboardReducer(state, action);
}
