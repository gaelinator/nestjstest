import { NestFactory } from '@nestjs/core';
import { CustomerServiceModule } from './customer-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomerServiceModule);
  await app.listen(3000);
}
bootstrap();
