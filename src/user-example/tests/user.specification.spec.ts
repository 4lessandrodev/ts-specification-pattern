import { User } from '../user.entity';
import {
     AdultUserSpecification,
     RichUserSpecification,
} from '../user.specification';

describe('user.specification', () => {
     let CURRENT_YEAR: number;

     beforeAll(() => {
          CURRENT_YEAR = new Date().getFullYear();
     });

     it('should be a valid rich single user', () => {
          const user = User.create({
               age: 18,
               balance: 500001,
               isSingle: true,
               name: 'Jane Doe',
               permission: 'ADMIN',
          });

          const richUserSpecification = new RichUserSpecification();
          const isRichSigleUser = richUserSpecification.isSatisfiedBy(user);

          expect(isRichSigleUser).toBe(true);
     });

     it('should be invalid rich single user', () => {
          const user = User.create({
               age: 18,
               balance: 10,
               isSingle: true,
               name: 'Jane Doe',
               permission: 'ADMIN',
          });

          const richUserSpecification = new RichUserSpecification();
          const isRichSigleUser = richUserSpecification.isSatisfiedBy(user);

          expect(isRichSigleUser).toBe(false);
     });

     it('should be a rich single user with a luxury car', () => {
          const jane = User.create({
               age: 17,
               balance: 500001,
               isSingle: true,
               name: 'Jane Doe',
               permission: 'ADMIN',
          });

          const john = User.create({
               age: 18,
               balance: 500001,
               isSingle: true,
               name: 'John Doe',
               permission: 'ADMIN',
          });

          const rich = new RichUserSpecification();
          const adult = new AdultUserSpecification();

          const result = rich.and(adult).isSatisfiedBy(john);

          expect(result).toBe(true);
     });

     it('should be a rich single user with a luxury car', () => {
          const jane = User.create({
               age: 17,
               balance: 500001,
               isSingle: true,
               name: 'Jane Doe',
               permission: 'ADMIN',
          });

          const john = User.create({
               age: 18,
               balance: 500001,
               isSingle: true,
               name: 'John Doe',
               permission: 'ADMIN',
          });

          const rich = new RichUserSpecification();
          const adult = new AdultUserSpecification();

          const result = rich.and(adult).isSatisfiedBy(jane);

          expect(result).toBe(false);
     });
});
