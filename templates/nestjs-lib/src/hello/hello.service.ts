import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  sayHello() {
    return 'Hello, world!';
  }
}
