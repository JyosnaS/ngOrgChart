import { Component, OnInit } from '@angular/core';
import { Coords } from './models';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  data = [
    {
      name: "Root",
      children: [
        {
          name: "child left"
        },
        {
          name: "child right"
        }
      ]
    }
  ];

  tempCords=[
    new Coords(50,50,150,100),
    new Coords(350,50,150,100)
  ]

  constructor() { }

  ngOnInit() {
  }

  calculateMesurement(node): number {
    let total = 0;
    if (node.children) {
      node.children.forEach(subNode => {
        total += this.calculateMesurement(subNode);
      });
    } else {
      total = 150 + 20 + 20;
    }
    return total;
  }
}
