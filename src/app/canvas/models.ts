export class Coords {
    x: number;
    y: number;
    width?: number;
    height?: number;
    constructor(x: number, y: number, width?: number, height?: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setX(x: number) {
        this.x = x;
    }
    setY(y: number) {
        this.y = y;
    }
    getTopConnector(): any {
        return {
            x: this.x + this.width / 2,
            y: this.y
        };
    }

    getBottomConnector(): any {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height
        };
    }
}

export class Node {
    constructor(public name: string, children?: Node[]) {
        this.coord = new Coords(0, 0, Node.NODE_WIDTH, Node.NODE_HEIGHT);
        this.children = children;
    }
    static H_GAP = 50;
    static V_GAP = 30;
    static NODE_WIDTH = 150;
    static NODE_HEIGHT = 100;
    static LINE_COLOR = '#3f3f3f';
    coord: Coords;
    parent: Node;
    children: Node[];
    lines?: any[];

    calculateLines() {
        if (this.parent) {
            const pMidCoords = this.parent.coord.getBottomConnector();
            const selfMidCoods = this.coord.getTopConnector();
            const midY = pMidCoords.y + (selfMidCoods.y - pMidCoords.y) / 2;
            this.lines = [];
            this.lines.push(
                {
                    x1: pMidCoords.x,
                    y1: pMidCoords.y,
                    x2: pMidCoords.x,
                    y2: midY
                },
                {
                    x1: pMidCoords.x,
                    y1: midY,
                    x2: selfMidCoods.x,
                    y2: midY
                },
                {
                    x1: selfMidCoods.x,
                    y1: midY,
                    x2: selfMidCoods.x,
                    y2: selfMidCoods.y
                }
            );
        }
    }
}
