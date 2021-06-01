import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/components/common/interfaces/card.interface';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {
  @Input() card: Card = {
    title: '',
    subTitle: '',
    iconClass: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
