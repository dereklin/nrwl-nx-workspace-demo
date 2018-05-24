import { SessionResolver } from './session-resolver';
import { HttpService } from '@nrwl-nx-workspace-demo/app-interfaces';

describe('SessionResolver', () => {
  it('should work', () => {
    expect(new SessionResolver({} as HttpService)).toBeDefined();
  });
});
