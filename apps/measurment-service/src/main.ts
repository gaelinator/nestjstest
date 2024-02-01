import { NestFactory } from '@nestjs/core';
import { MeasurmentServiceModule } from './measurment-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MeasurmentServiceModule);
  await app.listen(3000);
}
bootstrap();
