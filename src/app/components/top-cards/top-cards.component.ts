import { Component, OnInit } from '@angular/core';
import { Card } from '../common/interfaces/card.interface';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent implements OnInit {

  cards: Card[] = [
    {
      iconClass:'business',
      subTitle:'sweet home',
      title: 'Home'
    },
    {
      iconClass:'group',
      subTitle:'sweet home',
      title: 'Home'
    },
    {
      iconClass:'medication',
      subTitle:'sweet home',
      title: 'Home'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
