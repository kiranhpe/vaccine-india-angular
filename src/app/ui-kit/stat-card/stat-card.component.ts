import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/components/common/interfaces/card.interface';
import { StatsCard } from 'src/app/components/common/stats-card.interface';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {
  @Input() card: StatsCard = {
    title: '',
    subTitle: '',
    iconClass: '',
    catagories: [],
    total: 0,
    delta: 0
  };
  constructor() {}

  ngOnInit(): void {}
}
