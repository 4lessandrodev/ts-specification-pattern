import { Specification } from '../specification/Specification';
import { Car } from './car.entity';

/**
 * LuxuryCarSpecification check if a Car is Luxury
 */
export class LuxuryCarSpecification extends Specification<Car> {
     private readonly YEAR_CRITERIAL: number = new Date().getFullYear();
     private readonly NUMBER_OF_SEAT_CRITERIAL: number = 2;
     private readonly PORTS_QUANTITY_CRITERIAL: number = 2;
     private readonly HAS_AIR_BAG_CRITERIAL: boolean = true;
     private readonly COLORS_CRITERIAL: string[] = ['BLACK', 'RED'];

     constructor(private readonly target: Car) {
          super();
     }

     /**
      * LuxuryCarSpecification is satisfiedBy
      * @param props `manufactureYear`greatter OR equal current year
      * @param props `numberOfSeats`less Or equal to 2
      * @param props `hasAirBag`true
      * @param props `color` BLACK or RED
      */
     isSatisfiedBy(target: Car): boolean {
          return (
               target.manufactureYear >= this.YEAR_CRITERIAL &&
               target.numberOfSeats <= this.NUMBER_OF_SEAT_CRITERIAL &&
               target.hasAirBag === this.HAS_AIR_BAG_CRITERIAL &&
               target.portsQuantity === this.PORTS_QUANTITY_CRITERIAL &&
               this.COLORS_CRITERIAL.includes(target.color)
          );
     }
}
