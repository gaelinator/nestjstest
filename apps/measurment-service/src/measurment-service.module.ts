import { Module } from '@nestjs/common';
import { MeasurmentServiceController } from './measurment-service.controller';
import { MeasurmentServiceService } from './measurment-service.service';

@Module({
  imports: [],
  controllers: [MeasurmentServiceController],
  providers: [MeasurmentServiceService],
})
export class MeasurmentServiceModule {}
