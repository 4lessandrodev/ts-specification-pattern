import { Specification } from '../specification/Specification';
import { User } from './user.entity';

export class RichUserSpecification extends Specification<User> {
     private readonly BALANCE_MIN_CRITERIAL: number = 500000;

     isSatisfiedBy(target: User): boolean {
          return target.balance >= this.BALANCE_MIN_CRITERIAL;
     }
}

export class AdultUserSpecification extends Specification<User> {
     private readonly MIN_AGE_CRITERIAL = 18;

     isSatisfiedBy(target: User): boolean {
          return target.age >= this.MIN_AGE_CRITERIAL;
     }
}

export class AdmintUserSpecification extends Specification<User> {
     private readonly PERMISSION_CRITERIAL = 'ADMIN';

     isSatisfiedBy(target: User): boolean {
          return target.permission === this.PERMISSION_CRITERIAL;
     }
}

export class DeveloperUserSpecification extends Specification<User> {
     private readonly PERMISSION_CRITERIAL = 'DEVELOPER';

     isSatisfiedBy(target: User): boolean {
          return target.permission === this.PERMISSION_CRITERIAL;
     }
}
