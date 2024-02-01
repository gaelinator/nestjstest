import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { GatewayGateway } from './gateway/gateway.gateway';

@Module({
  imports: [],
  controllers: [AuthentificationController],
  providers: [AuthentificationService, GatewayGateway],
})
export class AuthentificationModule {}
