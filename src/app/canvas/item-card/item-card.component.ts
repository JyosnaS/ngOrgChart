import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../node.model';
import { UserData } from 'src/app/data.model';

@Component({
  selector: '[app-item-card]',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() node: Node<UserData>;

  hasParent: boolean;

  constructor() { }

  onCardClick(event) {
    this.node.toggleExpand();
  }

  ngOnInit() {
    this.node.calcLines();
    if (this.node.parent) {
      this.hasParent = true;
    }
  }
}
