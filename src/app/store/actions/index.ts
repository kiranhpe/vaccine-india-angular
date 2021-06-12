import { createAction, props } from "@ngrx/store";
import { Dashboard } from "src/app/components/common/interfaces/dashboard";

export const setDataFroDashboard = createAction('[Set Dashboard data] From API', props<{dashboardData:Dashboard}>());
