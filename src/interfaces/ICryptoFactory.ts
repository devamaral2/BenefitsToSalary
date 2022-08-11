export default interface ICryptoFactory {
  createNewHash(): void;
  checkPassword(encrypted: string): boolean;
}
