import * as fs from 'fs';

function readFile(
  callback: (returnJson: boolean) => any,
  returnJson: boolean = false,
  filePath: string,
  encoding: string = 'utf8',
) {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(returnJson ? JSON.parse(data) : data);
  });
}

function writeFile(
  fileData: string,
  callback: () => void,
  filePath: string,
  encoding = 'utf8',
) {
  fs.writeFile(filePath, fileData, encoding, (err) => {
    if (err) {
      throw err;
    }

    callback();
  });
}

export { readFile, writeFile };
