# revival-ui

Know how to write HTML and CSS? Great! You already know how to use Revival UI.

## What is Revival?

Revival UI is a React component library that is built on top of styled-components. The goal was to make a dead simple set of React components that are 1:1 representations of their html counterparts.

This library is meant to be used for rapid UI development using the tools you already know. No assumptions about how your components should look. No new API's to learn. Just HTML as react components, and styles as props. Responsive functionality is built in.

## Okay, so how do I use it?

### Install

```
npm install --save revival-ui
```

### Example

```javascript
/*
All tags have the same name as their html counterpart, but with a capitalized first letter.

The only exception is the <object> tag which has been renamed Obj
*/
import { Div, H1, P } from "revival-ui";

/* 
Any arrays passed will apply their styles at responsive media query breakpoints 

Styles are applied left to right from smallest to largest screensize
*/
const styles = {
  color: ["white", "white", "black"],
  background: ["blue", "red", "green", "orange", "yellow"],
  height: "100%",
  width: ["100%", "70%", "50%", "35%", "20%"],
  padding: "20"
};

const MyRevivalApp = () => {
  return (
    <Div {...styles}>
      <H1>Welcome to My Revival App!</H1>
      <P>Lorem Ipsum, etc.</P>
    </Div>
  );
};

export default MyRevivalApp;
```
