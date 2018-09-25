import { VendorKycModule } from './vendor-kyc.module';

describe('VendorKycModule', () => {
  let vendorKycModule: VendorKycModule;

  beforeEach(() => {
    vendorKycModule = new VendorKycModule();
  });

  it('should create an instance', () => {
    expect(vendorKycModule).toBeTruthy();
  });
});
