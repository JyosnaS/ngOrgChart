import { Component, OnInit } from '@angular/core';
import { Node } from './node.model';
import { UserData } from '../data.model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  modelNode: Node<UserData>;
  data = {
    name: 'John',
    spouse: 'Renu',
    gender: 'M',
    sub: [
      {
        name: 'Mr A',
        gender: 'M',
        spouse: 'Mrs AF'
      },
      {
        name: 'Mr B',
        gender: 'M',
        spouse: 'Mrs BF'
      },
      {
        name: 'Mr C',
        gender: 'M',
        spouse: 'Mrs CF'
      },
      {
        name: 'Mr D',
        gender: 'M',
        spouse: 'Mrs DF'
      },
      {
        name: 'Mrs E',
        gender: 'F',
        spouse: 'Mr EF'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
    this.modelNode = this.parseData(this.data, 'sub');
    this.modelNode.init(10, 0, true);
  }

  get MAX_WIDTH() {
    return Node.MAX_WIDTH;
  }

  parseData(raw: any, childrenKey: string): Node<UserData> {
    const root = new Node<UserData>(new UserData(raw));
    if (raw[childrenKey] && Array.isArray(raw[childrenKey])) {
      raw[childrenKey].forEach(item => {
        root.addChild(this.parseData(item, childrenKey));
      });
    }
    return root;
  }
}
