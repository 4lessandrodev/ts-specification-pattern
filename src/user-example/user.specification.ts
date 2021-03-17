import { Specification } from '../specification/Specification';
import { User } from './user.entity';

export class RichSingleUserSpecification extends Specification<User> {
     private readonly BALANCE_MIN_CRITERIAL: number = 500000;
     private readonly IS_SINGLE_CRITERIAL: boolean = true;

     isSatisfiedBy(target: User): boolean {
          return (
               target.balance >= this.BALANCE_MIN_CRITERIAL &&
               target.isSingle === this.IS_SINGLE_CRITERIAL
          );
     }
}

export class AdultUser extends Specification<User> {
     isSatisfiedBy(target: User): boolean {
          return target.age >= 18;
     }
}
