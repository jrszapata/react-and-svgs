## Using Svgs in React

This is an example of how to include SVGs into you're react applications.

#### Option 1

Convert your svg into a React component
```js
import React from "react";

export default () => (<svg>...</svg>)
```

Now include your new component as you normaly do with any component.
```js
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
