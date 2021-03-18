import { AbstractResult, IResult } from './interfaces/result.interface';

export class Result<T> extends AbstractResult<T> implements IResult<T> {
     private readonly _isError: boolean;
     private readonly _message: string | null;
     private readonly _value: T | null;
     private constructor(isError: boolean, message: string | null, target?: T) {
          super();
          this._isError = isError ?? false;
          this._message = message ?? null;
          this._value = target ?? null;
     }

     public static success<T>(target?: T): Result<T> {
          return new Result<T>(false, null, target);
     }
     public static fail<T>(message: string): Result<T> {
          return new Result<T>(true, message);
     }

     getErrorMessage(): string {
          if (!this._message) {
               throw new Error(
                    'You are trying to get an error message on success result',
               );
          }
          return this._message;
     }

     getValue(): T {
          if (!this._value) {
               throw new Error('You are trying to get a value on error result');
          }
          return this._value;
     }

     isError(): boolean {
          return this._isError;
     }

     isSuccess(): boolean {
          return !this._isError;
     }
}
