import { Result } from '../result.util';

export interface IResult<T> {
     getErrorMessage: () => string;
     getValue: () => T;
     isError: () => boolean;
     isSuccess: () => boolean;
}

export abstract class AbstractResult<T> {
     public static checkResultsHasError<T>(results: Result<T>[]): boolean {
          return results.map((result) => result.isError()).includes(true);
     }
}
