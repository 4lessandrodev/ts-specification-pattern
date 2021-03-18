import { BaseRole } from '../shared/interfaces/base-role.interface';
import { User } from './user.entity';
import {
     AdultUserSpecification,
     RichUserSpecification,
     AdmintUserSpecification,
     DeveloperUserSpecification,
} from './user.specification';

export class UserRoles extends BaseRole<User> {
     constructor(protected readonly user: User) {
          super(user);
     }

     canCreate(): boolean {
          const result = new AdultUserSpecification()
               .and(new AdmintUserSpecification())
               .isSatisfiedBy(this.user);

          this.results.push(`[${UserRoles.name}] - Create ${String(result)}`);
          console.log(this.results);

          return result;
     }

     canDelete(): boolean {
          const result = new AdmintUserSpecification()
               .and(new AdultUserSpecification())
               .isSatisfiedBy(this.user);

          this.results.push(`[${UserRoles.name}] - Delete ${String(result)}`);
          console.log(this.results);

          return result;
     }

     canEdit(): boolean {
          const result = new RichUserSpecification()
               .and(new DeveloperUserSpecification())
               .isSatisfiedBy(this.user);

          this.results.push(`[${UserRoles.name}] - Edit ${String(result)}`);
          console.log(this.results);

          return result;
     }

     canRead(): boolean {
          const result = new AdmintUserSpecification()
               .or(new DeveloperUserSpecification())
               .isSatisfiedBy(this.user);

          this.results.push(`[${UserRoles.name}] - Read ${String(result)}`);
          console.log(this.results);

          return result;
     }
}
