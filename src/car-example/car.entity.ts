import { Entity } from '../shared/interfaces/entity.interface';

export enum Colors {
     BLACK = 'BLACK',
     RED = 'RED',
     WHITE = 'WHITE',
     YELLOW = 'YELLOW',
     GREY = 'GREY',
}

export interface ICar {
     manufactureYear: number;
     color: keyof typeof Colors;
     portsQuantity: number;
     hasAirBag: boolean;
     numberOfSeats: number;
}

export class Car extends Entity<ICar> {
     private constructor(props: ICar) {
          super(props);
     }

     get color(): keyof typeof Colors {
          return this.props.color;
     }

     get manufactureYear(): number {
          return this.props.manufactureYear;
     }

     get portsQuantity(): number {
          return this.props.portsQuantity;
     }

     get hasAirBag(): boolean {
          return this.props.hasAirBag;
     }
     get numberOfSeats(): number {
          return this.props.numberOfSeats;
     }

     public static create(props: ICar): Car {
          const isValidYear = props.manufactureYear > 1900;
          if (!isValidYear) {
               throw new Error('Invalid Year YYYY');
          }
          return new Car(props);
     }
}
