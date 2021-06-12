import { createAction, props } from "@ngrx/store";
import { Dashboard } from "src/app/components/common/interfaces/dashboard";

export const setDataForDashboard = createAction('[Set Dashboard data] From API');

export const APISuccess = createAction('[Dashaboard API] Dashboard Loaded Success', props<{dashboardData:Dashboard}>())
