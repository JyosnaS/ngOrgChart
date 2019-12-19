import { UserData } from '../data.model';

export class Dimension {
    x: number;
    y: number;
    width?: number;
    height?: number;
    level: number;
    vEnd: number;
    hEnd: number;
    constructor(x: number, y: number, width?: number, height?: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.level = -1;
    }
    setX(x: number) {
        this.x = x;
    }
    setY(y: number) {
        this.y = y;
    }
    getLeftConnector(): any {
        return {
            x: this.x,
            y: this.y + this.height / 2
        };
    }

    getBottomConnector(): any {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height
        };
    }
}

export class Node<T> {
    constructor(public data: T, children?: Node<T>[]) {
        this.dim = new Dimension(0, 0, this._V.NODE_WIDTH, this._V.NODE_HEIGHT);
        this.children = children || [];
        this.isExpand = false;
    }
    static MAX_WIDTH = 100;

    readonly _V = {
        NODE_WIDTH: 200,
        NODE_HEIGHT: 100,
        H_GAP: 10,
        V_GAP: 10,
        LINE_COLOR: '#3f3f3f'
    };
    readonly dim: Dimension;

    public parent: Node<T>;
    public children: Node<T>[];
    public lines?: any[];
    public isExpand: boolean;

    init(prevTop?: number, level?: number, firstLevelExpand?: boolean) {
        this.dim.setX(this._V.H_GAP + level * (this._V.NODE_WIDTH + this._V.H_GAP));
        this.dim.setY(prevTop);
        this.dim.level = this.dim.level === -1 ? level || 0 : this.dim.level;
        let myBottom = prevTop;
        if (level === 0 && firstLevelExpand) {
            this.isExpand = true;
        }

        if (this.children && this.children.length && this.isExpand) {
            myBottom += this._V.NODE_HEIGHT + this._V.V_GAP;
            this.children.forEach((child: Node<T>) => {
                child.parent = this;
                myBottom = child.init(myBottom, level + 1);
            });
        } else {
            myBottom += this._V.NODE_HEIGHT + this._V.V_GAP;
            Node.MAX_WIDTH = Math.max(Node.MAX_WIDTH, this.dim.x + this._V.NODE_WIDTH + this._V.H_GAP);
        }

        this.dim.vEnd = myBottom;
        return myBottom;
    }

    addChild(child: Node<T>) {
        this.children.push(child);
    }

    toggleExpand() {
        this.isExpand = !this.isExpand;
        this.refresh();
    }

    private updateMaxEnd(v) {
        this.dim.hEnd = v;
        if (this.parent) {
            this.parent.updateMaxEnd(v);
        }
    }

    private refresh() {
        if (this.parent) {
            this.parent.refresh();
        } else {
            this.init(this.dim.y, this.dim.level);
            this.calcLines(true);
        }
    }

    expand(notRefresh?: boolean) {
        this.isExpand = true;
        if (!notRefresh) {
            this.refresh();
        }
    }

    collapse(notRefresh?: boolean) {
        this.isExpand = false;
        if (!notRefresh) {
            this.refresh();
        }
    }

    collapseAll() {
        this.collapse(true);
        if (this.children && this.children.length) {
            this.children.forEach((child: Node<T>) => {
                child.collapse(true);
            });
        }
        this.refresh();
    }

    expandAll() {
        this.expand(true);
        if (this.children && this.children.length) {
            this.children.forEach((child: Node<T>) => {
                child.expand(true);
            });
        }
        this.refresh();
    }

    calcLines(toParent?: boolean) {
        if (toParent) {
            if (this.parent) {
                return this.parent.calcLines(toParent);
            } else {
                return this.calcLines();
            }
        }
        const selfBottomXY = this.dim.getBottomConnector();
        if (this.children && this.children.length) {
            this.children.forEach((child: Node<T>) => {
                const childLeftXY = child.dim.getLeftConnector();
                child.lines = [{
                    x1: selfBottomXY.x,
                    y1: selfBottomXY.y,
                    x2: selfBottomXY.x,
                    y2: childLeftXY.y
                },
                {
                    x1: selfBottomXY.x,
                    y1: childLeftXY.y,
                    x2: childLeftXY.x,
                    y2: childLeftXY.y
                }];
                child.calcLines();
            });
        }
    }
}
