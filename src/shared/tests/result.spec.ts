import { Result } from '../result.util';

describe('result', () => {
     it('should be error and not success', () => {
          const result = Result.fail<number>('Mensagem de erro');
          expect(result.isError()).toBe(true);
          expect(result.isSuccess()).toBe(false);
          expect(result.getErrorMessage()).toBe('Mensagem de erro');
     });

     it('should be success and not error', () => {
          const result = Result.success<number>(10);
          expect(result.isError()).toBe(false);
          expect(result.isSuccess()).toBe(true);
          expect(result.getValue()).toBe(10);
     });

     it('should check if some result is error', () => {
          const resultSuccessA = Result.success<number>(10);
          const resultSuccessB = Result.success<number>(20);
          const resultErrorA = Result.fail<number>('Mensagem de erro');
          const resultErrorB = Result.fail<number>('Mensagem de erro');
          const checkA = Result.checkResultsHasError([
               resultErrorA,
               resultSuccessA,
               resultErrorB,
               resultSuccessB,
          ]);

          const checkB = Result.checkResultsHasError([
               resultSuccessA,
               resultSuccessB,
          ]);

          expect(checkA).toBe(true);
          expect(checkB).toBe(false);
     });
});
