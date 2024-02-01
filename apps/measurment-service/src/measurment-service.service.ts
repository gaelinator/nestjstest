import { Injectable } from '@nestjs/common';

@Injectable()
export class MeasurmentServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
