# DnD-Companion


## Installation steps

Download NodeJS from [NodeJS](https://nodejs.org/en/download/prebuilt-installer) if you do not already have NodeJS installed (install version 20.16.0). npm comes packaged with NodeJS.

Make sure NodeJS is correctly installed by running:
```
npm -v
node -v
```

Afterwards run a npm install in both the `\client` and `\web` folder. 
```
npm install
```

Recommended to install eslint globally:

```
npm install eslint -g
```

For VS Code, install the following extensions (will make development easier):
- ESLint
- JavaScript (ES6) code snippets
- Prettier - Code formatter
- Pretty Typescript Errors

## Local Database
Download and install -> https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.14-signed.msi
use default for the whole install, ensure it runs on port **27017**

Would recommend also downloading Studio 3T -> https://studio3t.com/download/ to view the local database

## Run the code

To run locally start **both** the web and client with 

```
npm run dev
```