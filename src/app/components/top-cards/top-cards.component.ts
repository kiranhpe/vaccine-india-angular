import { Component, OnInit } from '@angular/core';
import { Card } from '../common/interfaces/card.interface';
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
        {name:'Govt',value:0},
        {name:'Pvt',value:0}
      ],
      total: 0,
      delta:10
    },
    {
      iconClass: 'group',
      title: 'Total Registrations',
      catagories: [
        {name:'Govt',value:0},
        {name:'Pvt',value:0}
      ],
      total: 0,
      delta:10
    },
    {
      iconClass: 'medication',
      title: 'Total Vaccination Doses',
      catagories: [
        {name:'Govt',value:0},
        {name:'Pvt',value:0}
      ],
      total: 0,
      delta:10
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
