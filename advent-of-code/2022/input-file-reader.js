import * as fs from 'fs';

/**
 * Offers convenience methods to read files from the file system and convert them into the desired data structure.
 */
export const inputFileReader = {
  /**
   * Returns the file with the given path as an array of numbers.
   * @param {string} path
   * @return {number[]}
   */
  readAsNumberArray(path) {
    return this.readAsStringArray(path).map(line => parseInt(line, 10));
  },

  /**
   * Returns the file with the given path as an array of strings.
   * @param {string} path
   * @return {string[]}
   */
  readAsStringArray(path) {
    const inputFile = fs.readFileSync(path, { encoding: 'utf8' });
    return inputFile.toString().trim().split('\n');
  }
};
