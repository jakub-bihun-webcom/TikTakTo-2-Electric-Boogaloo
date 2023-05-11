export class NumberPad {
  private compartmentID: string = '';

  resetCompartmentID(): void {
    this.compartmentID = '';
  }

  updateCompartmentID(input: string): void {
    this.compartmentID = input;
  }
  setOrder() {
    return this.compartmentID
  }
}
