import { Controller, Get } from '@nestjs/common';
import { MeasurmentServiceService } from './measurment-service.service';

@Controller()
export class MeasurmentServiceController {
  constructor(private readonly measurmentServiceService: MeasurmentServiceService) {}

  @Get()
  getHello(): string {
    return this.measurmentServiceService.getHello();
  }
}
