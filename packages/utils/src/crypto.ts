import CryptoJS from 'crypto-js';

export class Crypto {
  /**
   * secret
   */
  secret: string;

  constructor(secret: string = '__CryptoJS_Secret__') {
    this.secret = secret;
  }

  encrypt(data: any): string {
    const dataString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(dataString, this.secret);
    return encrypted.toString();
  }

  decrypt(encrypted: string) {
    const decrypted = CryptoJS.AES.decrypt(encrypted, this.secret);
    const dataString = decrypted.toString(CryptoJS.enc.Utf8);
    try {
      return JSON.parse(dataString);
    } catch {
      // avoid parse error
      return null;
    }
  }
}
