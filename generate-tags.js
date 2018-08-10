const fs = require("fs");
const styled = require("styled-components").default;
const cssProps = require("./css-props");
const camelCase = require("camelcase");

const tags = Object.keys(styled);

let styleProps = `export function getStyleProps(props) {
  return { 
      ${Object.values(cssProps).map((val, idx, arr) => {
      if (idx === arr.length - 1) {
        return `"${val}": props.${camelCase(val)}`;
      }
      return `"${val}": props.${camelCase(val)},
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

const tagNames = [];

tags.forEach(tag => {
  const tagName = tag === "object" ? "Obj" : tag.charAt(0).toUpperCase() + tag.substr(1);

  tagNames.push(tagName);

  // let propTypes = cssProps.map((prop, idx, arr) => {
  //   if (idx === 0) {
  //     return `${camelCase(prop)}: PropTypes.string`
  //   }  else {
  //     return `
  // ${camelCase(prop)}: PropTypes.string`
  //   }
  // });

  let fileContents = `
import React from 'react';
import styled from 'styled-components';
import { getStyleProps } from '../helpers/style-props';

const Functional${tagName} = styled.${tag}\`
    \${props => getStyleProps(props)}
\`;

const ${tagName} = props => {
    return (
        <Functional${tagName} { ...props }>
            {props.children}
        </Functional${tagName}>
    )
};

export default ${tagName};
`;

// ${tagName}.propTypes = {
//   ${propTypes}
// }

  fs.writeFile(`${__dirname}/src/components/${tagName}.js`, fileContents, err => {
    if (err) {
      return console.log(err);
    }
  });
});

let fileContents = "";
tagNames.forEach((tag, idx, arr) => {
  if (idx === 0) {
    fileContents = fileContents + `import ${tag} from './components/${tag}';`;
  } else if (idx === arr.length - 1) {
    fileContents =
      fileContents +
      `
import ${tag} from './components/${tag}';
`;
  } else {
    fileContents =
      fileContents +
      `
import ${tag} from './components/${tag}';`;
  }
});

tagNames.forEach((tag, idx, arr) => {
  if (idx === 0) {
    fileContents =
      fileContents +
      `
export {
    ${tag},`;
  } else if (idx === arr.length - 1) {
    fileContents =
      fileContents +
      `
    ${tag}
};`;
  } else {
    fileContents =
      fileContents +
      `
    ${tag},`;
  }
});

fs.writeFile(`${__dirname}/src/index.js`, fileContents, err => {
  if (err) {
    return console.log(err);
  }
});
