import { inputFileReader } from '../input-file-reader.js';

class FileSystemEntity {
  /**
   * @param {string} name
   * @param {string} parentDirName
   * @param {number} size
   */
  constructor(name, parentDirName = undefined, size = 0) {
    this.name = name;
    this.parentDirName = parentDirName;
    this.size = size;
  }
}

class Directory extends FileSystemEntity {
  /**
   * @param {string} name
   * @param {string} parentDirName
   * @param {number} size
   */
  constructor(name, parentDirName = undefined, size = 0) {
    super(name, parentDirName, size);
    this.files = [];
  }

  /**
   * @param {File} file
   */
  addFile(file) {
    this.files.push(file);
  }
}

class File extends FileSystemEntity {
  /**
   * @param {string} name
   * @param {string} parentDirName
   * @param {number} size
   */
  constructor(name, parentDirName = undefined, size = 0) {
    super(name, parentDirName, size);
  }
}

const inputLines = inputFileReader.readAsStringArray('input-example.txt', '\r\n');
const directoryMap = createDirectoryMap(inputLines);
console.log(directoryMap);

/**
 * @param {string[]} input
 * @returns {Map<string, Directory>}
 */
function createDirectoryMap(input) {
  const directoryMap = new Map();

  let currentDirName;

  inputLines.forEach(line => {
    console.log(line);

    console.log('current directory name: ' + currentDirName);

    if (line.startsWith('$ cd ')) {
      const target = line.split('$ cd ')[1];

      if (target === '..') {
        const currentDir = findCurrentDirByName(currentDirName, directoryMap);
        currentDir.parentDirName = currentDirName;
        currentDirName = currentDir.parentDirName;
        return;
      }

      addDirIfNotPresent(target, directoryMap);

      const currentDir = findCurrentDirByName(target, directoryMap);
      currentDir.parentDirName = currentDirName;
      currentDirName = currentDir.name;

      return;
    }

    if (line === '$ ls') {
      return;
    }

    const [key, name] = line.split(' ');
    if (key === 'dir') {
      // it is a directory
      addDirIfNotPresent(name, directoryMap);
    } else {
      // it is a file
      const file = new File(name, currentDirName, key);
      const currentDir = findCurrentDirByName(currentDirName, directoryMap);
      currentDir.addFile(file);
    }
  });

  return directoryMap;
}

/**
 * @param {string} dirName
 * @param {Map<string, Directory>} directoryMap
 */
function addDirIfNotPresent(dirName, directoryMap) {
  if (!directoryMap.has(dirName)) {
    directoryMap.set(dirName, new Directory(dirName));
  }
}

/**
 * @param {string} dirName
 * @param {Map<string, Directory>} directoryMap
 * @return Directory
 */
function findCurrentDirByName(dirName, directoryMap) {
  return Array.from(directoryMap.values()).find(entity => entity.name === dirName);
}
let filesize = 0;
/**
 * @param {Map<string, Directory>} directoryMap
 */
function calculateDirSizes(directoryMap) {
  // TODO: calculate the size of all directories

  directoryMap.forEach(file => {
  })
}

function calculateDirSize(dir, size) {
  // TODO: calculate the size of single directory
}
console.log(filesize)