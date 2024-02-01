import { Module } from '@nestjs/common';
import { ProfileManagementController } from './profile-management.controller';
import { ProfileManagementService } from './profile-management.service';

@Module({
  imports: [],
  controllers: [ProfileManagementController],
  providers: [ProfileManagementService],
})
export class ProfileManagementModule {}
