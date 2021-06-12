import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Card } from '../common/interfaces/card.interface';
import { Dashboard } from '../common/interfaces/dashboard';
import { StatsCard } from '../common/stats-card.interface';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss'],
})
export class TopCardsComponent implements OnInit {
  cards: StatsCard[] = [
    {
      iconClass: 'business',
      title: 'Sites Conducting Vaccination',
      catagories: [
        { name: 'Govt', value: 0 },
        { name: 'Pvt', value: 0 },
      ],
      total: 0,
      delta: 10,
    },
    {
      iconClass: 'group',
      title: 'Total Registrations',
      catagories: [
        { name: 'Govt', value: 0 },
        { name: 'Pvt', value: 0 },
      ],
      total: 0,
      delta: 10,
    },
    {
      iconClass: 'medication',
      title: 'Total Vaccination Doses',
      catagories: [
        { name: 'Govt', value: 0 },
        { name: 'Pvt', value: 0 },
      ],
      total: 0,
      delta: 10,
    },
  ];

  data: Observable<Dashboard>;
  constructor(private store: Store<{ dashboardData: Dashboard }>) {
    this.data = this.store.select('dashboardData');
    this.data.subscribe((data) => {
      if (data) {
        let topBlockData = data.topBlock;
        this.cards = [
          {
            iconClass: 'business',
            title: 'Sites Conducting Vaccination',
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
            title: 'Total Vaccination Doses',
            catagories: [
              { name: 'Dose 1', value: topBlockData.vaccination['tot_dose_1']},
              { name: 'Dose 2', value: topBlockData.vaccination['tot_dose_2'] },
            ],
            total: topBlockData.vaccination['today'],
            delta: topBlockData.vaccination['total'],
          },
        ];
      }
    });
  }

  ngOnInit(): void {}
}
