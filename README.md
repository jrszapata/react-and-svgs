## Using Svgs in React

This is a simple example of how to include svg into you´re react application.

#### Option 1

Convert your svg into a React component
```js
import React from "react";

export default () => (<svg>...</svg>)
```
Now include your new component as you normaly do with any component.
```
# @/src/App.js
import React from "react";
import SquareIcon from "./components/SquareIcon.js";

function App() {
  return (<SquareIcon />);
}
```

#### Option 2

Place your svg files under a `svgs` directory (or whatever) and load them into the src of img tags.
```js
# @/src/App.js
import React from "react";
import SquareIcon from "./svgs/square.svg";


function App() {
  return (<img src={SquareIcon} alt="Square Icon" />);
}
```

That's it.
