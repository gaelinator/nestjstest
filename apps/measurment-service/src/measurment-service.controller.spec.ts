import { Test, TestingModule } from '@nestjs/testing';
import { MeasurmentServiceController } from './measurment-service.controller';
import { MeasurmentServiceService } from './measurment-service.service';

describe('MeasurmentServiceController', () => {
  let measurmentServiceController: MeasurmentServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MeasurmentServiceController],
      providers: [MeasurmentServiceService],
    }).compile();

    measurmentServiceController = app.get<MeasurmentServiceController>(MeasurmentServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(measurmentServiceController.getHello()).toBe('Hello World!');
    });
  });
});
