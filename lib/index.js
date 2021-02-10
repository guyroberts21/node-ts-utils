"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var fs = require("fs");
var utils = function (dataPath) {
    var readFile = function (callback, returnJson, filePath, encoding) {
        if (returnJson === void 0) { returnJson = false; }
        if (filePath === void 0) { filePath = dataPath; }
        if (encoding === void 0) { encoding = 'utf8'; }
        fs.readFile(filePath, encoding, function (err, data) {
            if (err) {
                throw err;
            }
            callback(returnJson ? JSON.parse(data) : data);
        });
    };
    var writeFile = function (fileData, callback, filePath, encoding) {
        if (filePath === void 0) { filePath = dataPath; }
        if (encoding === void 0) { encoding = 'utf8'; }
        fs.writeFile(filePath, fileData, encoding, function (err) {
            if (err) {
                throw err;
            }
            callback();
        });
    };
    return {
        readFile: readFile,
        writeFile: writeFile,
    };
};
exports.utils = utils;
