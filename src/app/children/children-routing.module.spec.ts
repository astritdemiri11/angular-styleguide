import { ChildrenRoutingModule } from './children-routing.module';

describe('ChildrenRoutingModule', () => {
  let childrenRoutingModule: ChildrenRoutingModule;

  beforeEach(() => {
    childrenRoutingModule = new ChildrenRoutingModule();
  });

  it('should create an instance', () => {
    expect(childrenRoutingModule).toBeTruthy();
  });
});
