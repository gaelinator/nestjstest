import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
