export declare const utils: (dataPath: string) => {
    readFile: (callback: (returnJson: boolean) => any, returnJson?: boolean, filePath?: string, encoding?: string) => void;
    writeFile: (fileData: string, callback: () => void, filePath?: string, encoding?: string) => void;
};
