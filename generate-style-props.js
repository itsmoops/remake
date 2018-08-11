const fs = require("fs");
const cssProps = require("./css-props");
const camelCase = require("camelcase");

let styleProps = `
function sanitizeProp(prop, bp) {
    if (Array.isArray(prop)) {
        return prop[bp];
    }
    return prop;
}

export function getStyleProps(props, bp) {
  return { 
      ${Object.values(cssProps).map((val, idx, arr) => {
        if (idx === arr.length - 1) {
          return `"${val}": sanitizeProp(props.${camelCase(val)}, bp)`;
        }
        return `"${val}": sanitizeProp(props.${camelCase(val)}, bp),
      `;
      })}
  }
}`;

styleProps = styleProps.replace(/,"/g, '"');

fs.writeFile(`${__dirname}/src/helpers/style-props.js`, styleProps, err => {
  if (err) {
    return console.log(err);
  }
});
