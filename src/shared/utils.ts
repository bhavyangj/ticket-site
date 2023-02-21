import { PhoneNumberUtil } from "google-libphonenumber";
import { Country } from "react-phone-number-input";

class PhoneUtils {
  private phoneInstance: PhoneNumberUtil;

  constructor() {
    this.phoneInstance = PhoneNumberUtil.getInstance();
  }
  isValidNumber(number: string, code: Country): boolean {
    try {
      return this.phoneInstance.isValidNumberForRegion(
        this.phoneInstance.parse(number, code),
        code
      );
    } catch (error) {
      return false;
    }
  }

  getNationalCode(number: string): string | undefined | null {
    try {
      return this.phoneInstance.getRegionCodeForNumber(
        this.phoneInstance.parse(number)
      );
    } catch (error) {
      return;
    }
  }
}

export const phoneUtils = new PhoneUtils();
