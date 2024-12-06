import { Test } from '@nestjs/testing';

import { HelloService } from '../../src';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HelloService],
    }).compile();

    service = module.get(HelloService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should say hello', () => {
    const result = service.sayHello();
    expect(result).toEqual('Hello, world!');
  });
});
