import { Test, TestingModule } from '@nestjs/testing';
import { ProfileManagementController } from './profile-management.controller';
import { ProfileManagementService } from './profile-management.service';

describe('ProfileManagementController', () => {
  let profileManagementController: ProfileManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProfileManagementController],
      providers: [ProfileManagementService],
    }).compile();

    profileManagementController = app.get<ProfileManagementController>(ProfileManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(profileManagementController.getHello()).toBe('Hello World!');
    });
  });
});
