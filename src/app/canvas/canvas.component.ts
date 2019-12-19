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
    name: 'Dukhabandhu Sahu',
    spouse: 'Sukanti Sahu',
    gender: 'M',
    late: true,
    sub: [
      {
        name: 'Dinabandhu',
        gender: 'M',
        spouse: 'Phula',
        sub: [
          {
            name: 'Harihara',
            gender: 'M',
            spouse: 'Kuni',
            sub: [
              {
                name: 'unknow',
                gender: 'M'
              },
              {
                name: 'unknow',
                gender: 'F'
              }
            ]
          },
          {
            name: 'Nirupama',
            gender: 'F',
            spouse: 'Sarata',
            sub: [
              {
                name: 'Sunita',
                gender: 'F',
                spouse: 'Dilip',
                sub: [
                  {
                    name: 'unknow',
                    gender: 'M',
                    baby: true
                  },
                  {
                    name: 'unknow',
                    gender: 'M',
                    baby: true
                  }
                ]
              },
              {
                name: 'Anita',
                gender: 'F',
                spouse: 'unknown',
                sub: [
                  {
                    name: 'unknow',
                    gender: 'M',
                    baby: true
                  }
                ]
              }
            ]
          },
          {
            name: 'Dasarathi',
            gender: 'M',
            spouse: 'Jhunubala',
            sub: [
              {
                name: 'unknow',
                gender: 'F',
                baby: true
              },
              {
                name: 'unknow',
                gender: 'F',
                baby: true
              },
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              }
            ]
          },
          {
            name: 'Manoj',
            gender: 'M',
            spouse: 'Sanju rani',
            sub: [
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              }
            ]
          }
        ]
      },
      {
        name: 'Jagabandhu',
        gender: 'M',
        spouse: 'Kuntala',
        sub: [
          {
            name: 'Arjun',
            gender: 'M',
            spouse: 'Bharati',
            sub: [
              {
                name: 'Chiku',
                gender: 'M',
              },
              {
                name: 'Riku',
                gender: 'M',
              }
            ]
          },
          {
            name: 'Kalpana',
            gender: 'F',
            spouse: 'Suryamani',
            sub: [
              {
                name: 'Barsa',
                spouse: 'Banendu',
                gender: 'F',
                sub: [
                  {
                    name: 'Guluru',
                    gender: 'M',
                    baby: true
                  }
                ]
              },
              {
                name: 'Bindu',
                gender: 'F',
                spouse: 'Dilip'
              },
              {
                name: 'Srabani',
                gender: 'F',
              },
              {
                name: 'Badal',
                gender: 'M'
              }
            ]
          },
          {
            name: 'Aparna',
            gender: 'F',
            spouse: 'Soubhagya',
            sub: [
              {
                name: 'Chinu',
                gender: 'M'
              },
              {
                name: 'Linu',
                gender: 'F',
                spouse: 'Anil',
                sub: [
                  {
                    name: 'unknow',
                    gender: 'M',
                    baby: true
                  }
                ]
              }
            ]
          },
          {
            name: 'Jyostna',
            gender: 'F',
            spouse: 'Bijay',
            sub: [
              {
                name: 'Jasmin',
                gender: 'F'
              }
            ]
          },
          {
            name: 'Santilata',
            gender: 'F',
            spouse: 'Dullabha',
            sub: [
              {
                name: 'Asmita',
                gender: 'F'
              },
              {
                name: 'Archita',
                gender: 'F'
              },
              {
                name: 'Amrita',
                gender: 'F'
              }
            ]
          },
          {
            name: 'Santanu',
            gender: 'M',
            spouse: 'Jyosna',
            sub: [
              {
                name: 'Saanvi',
                gender: 'F',
                baby: true
              }
            ]
          }
        ]
      },
      {
        name: 'Krupasindhu',
        gender: 'M',
        spouse: 'Pramila',
        sub: [
          {
            name: 'Suresha',
            gender: 'M',
            spouse: 'Puspalata',
            sub: [
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              },
              {
                name: 'unknow',
                gender: 'F',
                baby: true
              }
            ]
          },
          {
            name: 'Naresh',
            gender: 'M',
            spouse: 'Rina',
            sub: [
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              },
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              },
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              }
            ]
          },
          {
            name: 'Manishi',
            gender: 'F',
            spouse: 'Dilip',
            sub: [
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              },
              {
                name: 'unknow',
                gender: 'F',
                baby: true
              },
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              }
            ]
          }
        ]
      },
      {
        name: 'Anadi Charana',
        gender: 'M',
        spouse: 'Bachana',
        sub: [
          {
            name: 'Raghu',
            gender: 'M',
            spouse: 'Sunita'
          },
          {
            name: 'Mili',
            gender: 'F',
            spouse: 'Kuna',
            sub: [
              {
                name: 'Subhashree',
                gender: 'F',
                baby: true
              }
            ]
          },
          {
            name: 'Jhili',
            gender: 'F',
            late: true
          }
        ]
      },
      {
        name: 'Panchali',
        gender: 'F',
        spouse: 'Hrudananda',
        sub: [
          {
            name: 'Laxmi',
            gender: 'F',
            spouse: 'Late Ramesh',
            sub: [
              {
                name: 'unknow',
                gender: 'M'
              },
              {
                name: 'Payal',
                gender: 'F',
                spouse: 'Tuku'
              }
            ]
          },
          {
            name: 'Saraswati',
            gender: 'F',
            spouse: 'Madhaba',
            sub: [
              {
                name: 'unknow',
                gender: 'M'
              },
              {
                name: 'unknow',
                gender: 'F'
              }
            ]
          },
          {
            name: 'Tutu',
            gender: 'M',
            spouse: 'Sujata',
            sub: [
              {
                name: 'Sachi',
                gender: 'F'
              },
              {
                name: 'Shriya',
                gender: 'F',
                baby: true
              }
            ]
          },
          {
            name: 'Litu',
            gender: 'M',
            spouse: 'Linu',
            sub: [
              {
                name: 'unknow',
                gender: 'M',
                baby: true
              }
            ]
          }
        ]
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
