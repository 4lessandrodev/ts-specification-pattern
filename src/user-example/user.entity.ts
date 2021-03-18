import { Car } from '../car-example/car.entity';
import { Entity } from '../shared/interfaces/entity.interface';

export enum permissions {
     'ADMIN',
     'DEVELOPER',
}

interface IUser {
     name: string;
     age: number;
     balance: number;
     isSingle: boolean;
     permission: keyof typeof permissions;
     car?: Car;
}

interface IUserMethods {
     buyCar: (car: Car) => void;
}

export class User extends Entity<IUser> implements IUserMethods {
     private constructor(props: IUser) {
          super(props);
     }

     get name(): string {
          return this.props.name;
     }

     get age(): number {
          return this.props.age;
     }

     get balance(): number {
          return this.props.balance;
     }

     get isSingle(): boolean {
          return this.props.isSingle;
     }

     get car(): Car | null {
          return this.props.car ?? null;
     }

     get permission(): keyof typeof permissions {
          return this.props.permission;
     }

     buyCar(car: Car): void {
          this.props.car = car;
     }

     public static create(props: IUser): User {
          return new User(props);
     }
}
