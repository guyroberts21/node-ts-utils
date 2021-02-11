# Node-TypeScript Utils

An object containing two useful functions for working with files in NodeJS

## Usage

```bash
npm install node-ts-utils
```

Use as any other module:

```typescript
import { readFile, writeFile } from 'node-ts-utils';

// Eg. print data from json file
const dataPath = './data/test.json';
readFile(
  (data) => {
    console.log(data);
  },
  false,
  dataPath,
);
```
