import { NestFactory } from '@nestjs/core';
import { ProfileManagementModule } from './profile-management.module';

async function bootstrap() {
  const app = await NestFactory.create(ProfileManagementModule);
  await app.listen(3000);
}
bootstrap();
