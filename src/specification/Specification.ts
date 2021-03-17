import { ISpecification } from './interfaces/ISpecification';

/**
 * Class Abstract Specification
 */
export abstract class Specification<T> implements ISpecification<T> {
     abstract isSatisfiedBy(target: T): boolean;

     and(other: ISpecification<T>): ISpecification<T> {
          return new AndSpecification<T>(this, other);
     }

     or(other: ISpecification<T>): ISpecification<T> {
          return new OrSpecification<T>(this, other);
     }

     not(): ISpecification<T> {
          return new NotSpecification<T>(this);
     }
}

/**
 * And Operator Specification Method
 */
export class AndSpecification<T> extends Specification<T> {
     constructor(
          private readonly one: ISpecification<T>,
          private readonly other: ISpecification<T>,
     ) {
          super();
     }

     isSatisfiedBy(target: T): boolean {
          return (
               this.one.isSatisfiedBy(target) &&
               this.other.isSatisfiedBy(target)
          );
     }
}

/**
 * Not Operator Specification Method
 */
export class NotSpecification<T> extends Specification<T> {
     constructor(private readonly instance: ISpecification<T>) {
          super();
     }

     isSatisfiedBy(target: T): boolean {
          return !this.instance.isSatisfiedBy(target);
     }
}

/**
 * Or Operator Specification Method
 */
export class OrSpecification<T> extends Specification<T> {
     constructor(
          private readonly one: ISpecification<T>,
          private readonly other: ISpecification<T>,
     ) {
          super();
     }

     isSatisfiedBy(target: T): boolean {
          return (
               this.one.isSatisfiedBy(target) ||
               this.other.isSatisfiedBy(target)
          );
     }
}
