#! /usr/bin/env node

const opn = require('opn');
const search = process.argv[2];
if(search) {
    const url = `https://developer.mozilla.org/en-US/search?q=${search}`
    opn(url);
} else {
    console.log("Please provide a parameter to search the MDN for");
}
process.exit(0);