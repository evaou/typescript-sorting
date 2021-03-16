# Typescript Sorting

## Focus

Apply abstract class

## Setup

    $ tsc --init
    $ vim tsconfig.json
    // "outDir": "./build",
    // "rootDir": "./src",

    $ npm init -y
    $ vim package.json
    // "scripts": {
    //   "start:build": "tsc -W",
    //   "start:run": "nodemon build/index.js",
    //   "start": "concurrently npm:start:*"
    // }

    // nodemon: execute compiled code
    // concurrent: run multi script at the same tome
    $ npm install nodemon concurrently

## Run

    // watch and recompile automatically
    $ tsc -W

    $ npm start
