export class OutputChange {
  private change: number = 0;

  addChange(change: number): void {
    this.change += change;
  }

  /**
   * Gibt das gespeicherte Rückgeld aus.
   */
  removeChange(): number {
    const changeStored = this.change;
    this.change = 0;
    return changeStored;
  }
}
