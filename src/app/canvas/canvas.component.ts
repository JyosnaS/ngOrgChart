import { Component, OnInit } from '@angular/core';
import { Coords, Node } from './models';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  data: Node = new Node('root', [
    new Node('left', [
      new Node('Left 1'),
      new Node('Right 1')
    ]),
    new Node('mid'),
    new Node('right', [
      new Node('Left 1'),
      new Node('Left 1'),
      new Node('Right 1')
    ])
  ]);


  constructor() { }

  ngOnInit() {
    this.calculateMesurement(this.data, 10, 0);
  }

  calculateMesurement(node: Node, prevStart: number, level: number): number {
    let myEnd = prevStart;
    let myStart = prevStart;
    if (node.children) {

      node.children.forEach(subNode => {
        subNode.parent = node;
        myEnd = this.calculateMesurement(subNode, myEnd, level + 1);
      });
      myStart = (((myEnd - prevStart) / 2) - (Node.NODE_WIDTH + Node.H_GAP) / 2) + prevStart;
    } else {
      myEnd = prevStart + Node.NODE_WIDTH + Node.H_GAP;
    }

    node.coord.setX(myStart);
    node.coord.setY(level * (Node.NODE_HEIGHT + Node.V_GAP));
    return myEnd;
  }
}
