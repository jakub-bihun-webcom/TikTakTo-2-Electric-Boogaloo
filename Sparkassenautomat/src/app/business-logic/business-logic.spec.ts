import { AtmFacade } from './atm-facade';

describe('AtmFacade', () => {
  let atmFacade: AtmFacade;

  beforeEach(() => {
    atmFacade.refill(15000);
  });

  it('should show error when login failed', () => {
    atmFacade.login('1', '0');

    expect(atmFacade.readErrorMessage()).toBe('Bitte überprüfen Sie Ihre Anmeldedaten');
  });

  it('should successfully login user', () => {
    atmFacade.login('1', '0');

    expect(atmFacade.readErrorMessage()).toBeUndefined();
  });

  it('should show correct display message after logout', () => {
    atmFacade.login('1', '1');
    atmFacade.logout();

    expect(atmFacade.readDisplay()).toBe('Bitte authentifizieren Sie sich');
  });

  it('should should error message when withdrawing more than the maximum allowed amount', () => {
    atmFacade.login('1', '0');
    atmFacade.withdrawCustomAmount(6000);

    expect(atmFacade.readErrorMessage()).toBe('Die maximale Abhebesumme beträgt 5000€');
  });

  it('should show error message when atm has not enough money', () => {
    atmFacade.login('1234', '5678');
    atmFacade.withdrawCustomAmount(100000);

    expect(atmFacade.readErrorMessage()).toBe('Es befindet sich nicht mehr genug Geld im Automaten');
  });

  it('should show error message when bank account has not enough money', () => {
    atmFacade.login('0000', '1802349');
    atmFacade.withdraw(50);

    expect(atmFacade.readErrorMessage()).toBe('Konto nicht ausreichend gedeckt');
  });

  it('should show error message when withdrawing invalid amount', () => {
    atmFacade.login('1234', '5678');
    expect(() => {
      atmFacade.withdraw(300);
    }).toThrowError('Der Betrag kann nicht ausgewählt werden');

    expect(atmFacade.readErrorMessage()).toBe('Es befindet sich nicht mehr genug Geld im Automaten');
  });

  it('should show account balance', () => {
    atmFacade.login('1', '1');
    const accountBalance = atmFacade.getAccountBalance();

    expect(accountBalance).toBe(11111);
  });

  it('should logout after withdrawing', () => {
    atmFacade.login('1', '1');
    atmFacade.withdraw(10);

    expect(atmFacade.readDisplay()).toBe('Bitte authentifizieren Sie sich');
  });

  it('should show updated account balance after withdrawing', () => {
    atmFacade.login('1', '1');
    atmFacade.withdraw(10);

    atmFacade.login('1', '1');
    atmFacade.withdrawCustomAmount(110);

    atmFacade.login('1', '1');
    const accountBalance = atmFacade.getAccountBalance();

    expect(accountBalance).toBe(10.991);
  });

  it('should show error message when withdrawing invalid custom amount', () => {
    atmFacade.login('1', '1');
    atmFacade.withdrawCustomAmount(1);

    expect(atmFacade.readErrorMessage()).toBe('Der Betrag muss in Scheinen ausgegeben werden können');
  });
});
