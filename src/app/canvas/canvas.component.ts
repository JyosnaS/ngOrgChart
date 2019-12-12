import { Component, OnInit } from '@angular/core';
import { Coords, Node } from './models';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  data: Node = new Node('root', [
    new Node('l1',
      [
        new Node('Left 1'),
        new Node('Right 1')
      ]
    ),
    new Node('l2'),
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

  calculateMesurement(node: Node, prevTop: number, level: number): number {
    let myBottom = prevTop;
    // top it based on previos sibling took space
    node.coord.setY(prevTop);
    // left direct multiple of node with and the gap between them
    node.coord.setX(Node.H_GAP + level * (Node.NODE_WIDTH + Node.H_GAP));

    if (node.children) {

      // vertical level gap in compare to parent node
      myBottom += Node.NODE_HEIGHT;

      node.children.forEach(subNode => {
        subNode.parent = node;
        myBottom = this.calculateMesurement(subNode, myBottom, level + 1);
      });
    } else {
      // next sibling node should render after this node and its child rendered
      myBottom = prevTop + Node.NODE_HEIGHT + Node.V_GAP;
    }


    return myBottom;
  }
}
