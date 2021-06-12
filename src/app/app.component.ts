import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dashboard } from './components/common/interfaces/dashboard';
import { ApiService } from './services/api.service';
import { StorageService } from './services/storage.service';
import { setDataFroDashboard } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vaccine-india-angular';

  constructor(
    private _api: ApiService,
    private storage: StorageService,
    private store: Store<{ dashboardData: Dashboard }>
  ) {
    if (this.storage.isDataAvailable()) {
      if (!this.storage.isDataOld()) {
        let data = JSON.parse(this.storage.getData('API_DATA'));
        this.store.dispatch(setDataFroDashboard({ dashboardData: data }));
      } else {
        this._api.getDashBoardData().subscribe((data: Dashboard) => {
          this.store.dispatch(setDataFroDashboard({ dashboardData: data }));
          this.storage.setData('API_DATA', JSON.stringify(data));
        });
      }
    } else {
      this._api.getDashBoardData().subscribe((data: Dashboard) => {
        this.store.dispatch(setDataFroDashboard({ dashboardData: data }));
        this.storage.setData('API_DATA', JSON.stringify(data));
      });
    }
  }

  ngOnInit() {}
}
