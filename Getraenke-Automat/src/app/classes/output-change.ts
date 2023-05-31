export class OutputChange {
  private change: number = 0;

  addChange(change: number): void {
    this.change += change;
  }

  /**
   * Lässt den Kunden das Wechselgeld nehmen
   */
  removeChange(): number {
    const changeStored = this.change;
    this.change = 0;
    return changeStored;
  }
}
