import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [],
    }).compile();
  });

  describe('root', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    it.todo('should load the app module', () => {});
  });
});
