import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Dashboard } from './components/common/interfaces/dashboard';
import { StorageService } from './services/storage.service';
import { APISuccess, setDataForDashboard } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vaccine-india-angular';

  constructor(
    private storage: StorageService,
    private store: Store<{ dashboardData: Dashboard }>,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    setTimeout(()=>{if (this.storage.isDataAvailable()) {
      if (!this.storage.isDataOld()) {
        let data = JSON.parse(this.storage.getData('API_DATA'));
        this.store.dispatch(APISuccess({ dashboardData: data }));
        this.spinner.hide();
      } else {
        this.store.dispatch(setDataForDashboard());
        this.store.select('dashboardData').subscribe((data) => {
          this.storage.setData('API_DATA', JSON.stringify(data));
          this.spinner.hide();
        });
      }
    } else {
      this.store.dispatch(setDataForDashboard());
      this.store.select('dashboardData').subscribe((data) => {
        this.storage.setData('API_DATA', JSON.stringify(data));
        this.spinner.hide();
      });
    }}, 1000)
    
  }
}
