import { Component, OnInit, Input } from '@angular/core';
import { Coords } from '../models';

@Component({
  selector: '[app-item-card]',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() coord: Coords;

  
  constructor() { }

  ngOnInit() {

  }



}
