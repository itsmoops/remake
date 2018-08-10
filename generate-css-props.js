const cssProps = require("known-css-properties").all;
const fs = require("fs");

const props = `module.exports = [${[
  Object.values(cssProps).map(val => {
    return "'" + val.toString() + "'";
  })
]}]`;

fs.writeFile(`${__dirname}/css-props.js`, props, err => {
  if (err) {
    return console.log(err);
  }
});
