import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../models';

@Component({
  selector: '[app-item-card]',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() node: Node;

  hasParent: boolean;

  constructor() { }

  ngOnInit() {
    if (this.node.parent) {
      this.node.calculateLines();
      this.hasParent = true;
    }
  }



}
