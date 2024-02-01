import { Controller, Get } from '@nestjs/common';
import { ProfileManagementService } from './profile-management.service';

@Controller()
export class ProfileManagementController {
  constructor(private readonly profileManagementService: ProfileManagementService) {}

  @Get()
  getHello(): string {
    return this.profileManagementService.getHello();
  }
}
