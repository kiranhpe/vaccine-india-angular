import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dashboard } from './components/common/interfaces/dashboard';
import { ApiService } from './services/api.service';
import { setDataFroDashboard } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vaccine-india-angular';

  constructor(private _api: ApiService, private store: Store<{ dashboardData: Dashboard }>){
    this._api.getDashBoardData().subscribe((data:Dashboard) => {
      this.store.dispatch(setDataFroDashboard({dashboardData:data}));
     })
  }
  
  ngOnInit(){
    
  }
}
