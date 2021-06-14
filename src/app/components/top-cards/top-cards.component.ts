import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dashboard } from '../common/interfaces/dashboard';
import { StatsCard } from '../common/stats-card.interface';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss'],
})
export class TopCardsComponent implements OnInit {
  cards: StatsCard[] = [];

  data: Observable<Dashboard>;
  constructor(private store: Store<{ dashboardData: Dashboard }>) {
    this.data = this.store.select('dashboardData');
    this.data.subscribe((data) => {
      if (data) {
        let topBlockData = data.topBlock;
        this.cards = [
          {
            iconClass: 'business',
            title: 'Vaccination Sites',
            catagories: [
              { name: 'Govt', value: topBlockData.sites.govt },
              { name: 'Pvt', value: topBlockData.sites.pvt },
            ],
            total: topBlockData.sites.total,
            delta: topBlockData.sites.total,
          },
          {
            iconClass: 'group',
            title: 'Total Registrations',
            catagories: [
              { name: 'Age 18-44', value: topBlockData.registration.cit_18_45 },
              {
                name: 'Age 45+',
                value: topBlockData.registration.cit_45_above,
              },
            ],
            total: topBlockData.registration.total,
            delta: topBlockData.registration.today,
          },
          {
            iconClass: 'medication',
            title: 'Total Vaccination',
            catagories: [
              { name: 'Dose 1', value: topBlockData.vaccination['tot_dose_1']},
              { name: 'Dose 2', value: topBlockData.vaccination['tot_dose_2'] },
            ],
            total: topBlockData.vaccination['total_doses'],
            delta: topBlockData.vaccination['today'],
          },
        ];
      }
    });
  }

  ngOnInit(): void {}
}
