export abstract class BaseRole<T> {
     protected readonly results: Array<string>;
     constructor(protected readonly target: T) {
          this.results = [];
     }

     abstract canCreate(): boolean;
     abstract canDelete(): boolean;
     abstract canEdit(): boolean;
     abstract canRead(): boolean;
}
