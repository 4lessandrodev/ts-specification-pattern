import { User } from '../user.entity';
import { UserRoles } from '../user.roles';

describe('user.rules', () => {
     it('ADMIN and ADULT should have access to create', () => {
          const user = User.create({
               age: 21,
               balance: 900000,
               isSingle: true,
               name: 'Jessye',
               permission: 'ADMIN',
          });

          const result = new UserRoles(user).canCreate();
          expect(result).toBe(true);
     });

     it('NOT ADULT and NOT ADMIN should not have access to create', () => {
          const user = User.create({
               age: 16,
               balance: 900000,
               isSingle: true,
               name: 'Jessye',
               permission: 'DEVELOPER',
          });

          const result = new UserRoles(user).canCreate();
          expect(result).toBe(false);
     });

     it('ADMIN and NOT ADULT should not have access to create', () => {
          const user = User.create({
               age: 16,
               balance: 900000,
               isSingle: true,
               name: 'Jessye',
               permission: 'ADMIN',
          });

          const result = new UserRoles(user).canCreate();
          expect(result).toBe(false);
     });

     it('ADULT and NOT ADMIN should not have access to create', () => {
          const user = User.create({
               age: 22,
               balance: 900000,
               isSingle: true,
               name: 'Jessye',
               permission: 'DEVELOPER',
          });

          const result = new UserRoles(user).canCreate();
          expect(result).toBe(false);
     });

     it('RICH and DEVELOPER should have access to edit', () => {
          const user = User.create({
               age: 22,
               balance: 900000,
               isSingle: true,
               name: 'Jessye',
               permission: 'DEVELOPER',
          });

          const result = new UserRoles(user).canEdit();
          expect(result).toBe(true);
     });

     it('NOT RICH and DEVELOPER should not have access to edit', () => {
          const user = User.create({
               age: 22,
               balance: 100,
               isSingle: true,
               name: 'Jessye',
               permission: 'DEVELOPER',
          });

          const result = new UserRoles(user).canEdit();
          expect(result).toBe(false);
     });

     it('RICH and ADMIN should have access to edit', () => {
          const user = User.create({
               age: 22,
               balance: 900000,
               isSingle: true,
               name: 'Jessye',
               permission: 'ADMIN',
          });

          const result = new UserRoles(user).canEdit();
          expect(result).toBe(false);
     });
});
