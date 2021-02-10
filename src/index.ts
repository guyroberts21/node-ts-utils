import * as fs from 'fs';

export const utils = (dataPath: string) => {
  const readFile = (
    callback: (returnJson: boolean) => any,
    returnJson: boolean = false,
    filePath: string = dataPath,
    encoding: string = 'utf8',
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData: string,
    callback: () => void,
    filePath = dataPath,
    encoding = 'utf8',
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  return {
    readFile,
    writeFile,
  };
};
