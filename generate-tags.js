const fs = require("fs");
const styled = require("styled-components").default;
const cssProps = require("./css-props").default;
const camelCase = require("camelcase");

const tags = Object.keys(styled);

const cssLogic = Object.values(cssProps).map((val, idx, arr) => {
  if (idx === arr.length - 1) {
    return `${val}: \${props => props.${camelCase(val)}};`;
  }
  return `${val}: \${props => props.${camelCase(val)}};
    `;
});

const tagNames = [];

tags.forEach(tag => {
  const tagName = tag.charAt(0).toUpperCase() + tag.substr(1);
  tagNames.push(tagName);

  let fileContents = `
const Functional${tagName} = styled.${tag}\`
    ${[cssLogic]}
\`

const ${tagName} = props => {
    return (
        <Functional${tagName} { ...props }>
            {props.children}
        </Functional${tagName}>
    )
}

export default ${tagName};
  `;

  fileContents = fileContents.replace(/,/g, "");

  fs.writeFile(`${__dirname}/src/components/${tagName}.js`, fileContents, err => {
    if (err) {
      return console.log(err);
    }
  });
});

let fileContents = "";
tagNames.forEach((tag, idx, arr) => {
  if (idx === 0) {
    fileContents = fileContents + `import ${tag} from './components/${tag}'`;
  } else if (idx === arr.length - 1) {
    fileContents =
      fileContents +
      `
import ${tag} from './components/${tag}'
`;
  } else {
    fileContents =
      fileContents +
      `
import ${tag} from './components/${tag}'`;
  }
});

tagNames.forEach((tag, idx, arr) => {
  if (idx === 0) {
    fileContents =
      fileContents +
      `
export default {
  ${tag},`;
  } else if (idx === arr.length - 1) {
    fileContents =
      fileContents +
      `
  ${tag}
}`;
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
