const fs = require("fs");
const cssProps = require("./css-props");
const camelCase = require("camelcase");

let styleProps = `
import { css } from 'styled-components';
import * as constants from "../constants/constants";

export function formatStyles(props) {
  const arrayProps = {};
  for (let prop in props) {
    if (Array.isArray(props[prop])) {
      arrayProps[prop] = props[prop];
    } else {
      arrayProps[prop] = [props[prop]];
    }
  }

  const xs = {};
  const sm = {};
  const md = {};
  const lg = {};
  const xl = {};
  const xxl = {};
  const xxxl = {};
  const xxxxl = {};

  Object.entries(arrayProps).forEach(([key, value]) => {
    if (typeof value[0] === "string") {
      xs[key] = value[0] && value[0];
      sm[key] = value[1] && value[1];
      md[key] = value[2] && value[2];
      lg[key] = value[3] && value[3];
      xl[key] = value[4] && value[4];
      xxl[key] = value[5] && value[5];
      xxxl[key] = value[6] && value[6];
      xxxxl[key] = value[7] && value[7];
    }
  });

  return css\`
    \${getStyleProps(xs, 0)};

    @media (min-width: \${constants.SCREEN_SM}) {
      \${getStyleProps(sm, 1)};
    }
    @media (min-width: \${constants.SCREEN_MD}) {
      \${getStyleProps(md, 2)};
    }
    @media (min-width: \${constants.SCREEN_LG}) {
      \${getStyleProps(lg, 3)};
    }
    @media (min-width: \${constants.SCREEN_XL}) {
      \${getStyleProps(xl, 4)};
    }
    @media (min-width: \${constants.SCREEN_XXL}) {
      \${getStyleProps(xxl, 5)};
    }
    @media (min-width: \${constants.SCREEN_XXXL}) {
      \${getStyleProps(xxxl, 6)};
    }
    @media (min-width: \${constants.SCREEN_XXXXL}) {
      \${getStyleProps(xxxxl, 7)};
    }
  \`;
}

export function getStyleProps(props) {
  return { 
      ${Object.values(cssProps).map((val, idx, arr) => {
        if (idx === arr.length - 1) {
          return `"${val}": props.${camelCase(val)}`;
        }
        return `"${val}": props.${camelCase(val)},
      `;
      })}
  }
}
`;

styleProps = styleProps.replace(/,"/g, '"');

fs.writeFile(`${__dirname}/src/helpers/helpers.js`, styleProps, err => {
  if (err) {
    return console.log(err);
  }
});
