const cssProps = require("just-css-properties");
const fs = require("fs");

const props = `export default [${[
  Object.values(cssProps).map(val => {
    return "'" + val.toString() + "'";
  })
]}]`;

fs.writeFile(`${__dirname}/css-props.js`, props, err => {
  if (err) {
    return console.log(err);
  }
});
