import { GlowingValueModule } from './glowing-value.module';

describe('GlowingValueModule', () => {
  let glowingValueModule: GlowingValueModule;

  beforeEach(() => {
    glowingValueModule = new GlowingValueModule();
  });

  it('should create an instance', () => {
    expect(glowingValueModule).toBeTruthy();
  });
});
