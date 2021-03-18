import { Car } from '../car.entity';
import { LuxuryCarSpecification } from '../car.specification';

describe('car.specification', () => {
     let CURRENT_YEAR: number;

     beforeAll(() => {
          CURRENT_YEAR = new Date().getFullYear();
     });

     it('should validate the car as luxury car', () => {
          const car = Car.create({
               color: 'BLACK',
               portsQuantity: 2,
               numberOfSeats: 2,
               hasAirBag: true,
               manufactureYear: CURRENT_YEAR,
          });

          const luxuryCarSpecification = new LuxuryCarSpecification(car);
          expect(luxuryCarSpecification.isSatisfiedBy(car)).toBe(true);
     });

     it('should validate the car as luxury car', () => {
          const car = Car.create({
               color: 'RED',
               portsQuantity: 2,
               numberOfSeats: 2,
               hasAirBag: true,
               manufactureYear: CURRENT_YEAR,
          });

          const luxuryCarSpecification = new LuxuryCarSpecification(car);
          expect(luxuryCarSpecification.isSatisfiedBy(car)).toBe(true);
     });

     it('should fail if the car is not from current year ', () => {
          const car = Car.create({
               color: 'BLACK',
               portsQuantity: 2,
               numberOfSeats: 2,
               hasAirBag: true,
               manufactureYear: 2000,
          });

          const luxuryCarSpecification = new LuxuryCarSpecification(car);
          expect(luxuryCarSpecification.isSatisfiedBy(car)).toBe(false);
     });

     it('should fail if the car is not RED or BLACK', () => {
          const car = Car.create({
               color: 'WHITE',
               portsQuantity: 2,
               numberOfSeats: 2,
               hasAirBag: true,
               manufactureYear: CURRENT_YEAR,
          });

          const luxuryCarSpecification = new LuxuryCarSpecification(car);
          expect(luxuryCarSpecification.isSatisfiedBy(car)).toBe(false);
     });

     it('should fail if the car has more than 2 ports', () => {
          const car = Car.create({
               color: 'BLACK',
               portsQuantity: 4,
               numberOfSeats: 2,
               hasAirBag: true,
               manufactureYear: CURRENT_YEAR,
          });

          const luxuryCarSpecification = new LuxuryCarSpecification(car);
          expect(luxuryCarSpecification.isSatisfiedBy(car)).toBe(false);
     });

     it('should fail if the car has more than 2 seats', () => {
          const car = Car.create({
               color: 'BLACK',
               portsQuantity: 2,
               numberOfSeats: 4,
               hasAirBag: true,
               manufactureYear: CURRENT_YEAR,
          });

          const luxuryCarSpecification = new LuxuryCarSpecification(car);
          expect(luxuryCarSpecification.isSatisfiedBy(car)).toBe(false);
     });

     it('should validate none of cars is luxury', () => {
          const gol = Car.create({
               color: 'YELLOW',
               portsQuantity: 4,
               numberOfSeats: 5,
               hasAirBag: true,
               manufactureYear: 2020,
          });

          const corsa = Car.create({
               color: 'WHITE',
               portsQuantity: 4,
               numberOfSeats: 5,
               hasAirBag: true,
               manufactureYear: 2018,
          });

          const corsaSpecification = new LuxuryCarSpecification(corsa);
          const golSpecification = new LuxuryCarSpecification(gol);

          expect(
               corsaSpecification.and(golSpecification).isSatisfiedBy(corsa),
          ).toBe(false);
     });

     it('should validate one of cars is luxury', () => {
          const gol = Car.create({
               color: 'YELLOW',
               portsQuantity: 4,
               numberOfSeats: 5,
               hasAirBag: true,
               manufactureYear: 2020,
          });

          const bmw = Car.create({
               color: 'BLACK',
               portsQuantity: 2,
               numberOfSeats: 2,
               hasAirBag: true,
               manufactureYear: CURRENT_YEAR,
          });

          const golSpecification = new LuxuryCarSpecification(gol);
          const bmwSpecification = new LuxuryCarSpecification(bmw);

          expect(golSpecification.or(bmwSpecification).isSatisfiedBy(bmw)).toBe(
               true,
          );
     });
});
