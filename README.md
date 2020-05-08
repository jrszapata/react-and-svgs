## Using Svgs in React

This is a simple example of how to include svg into you´re react application.

#### Option 1

Convert your svg into a React component
```
import React from "react";

export default () => (<svg>...</svg>)
```
Now include your new component as you normaly do with any component.
```
# @/src/App.js
...
import SquareIcon from "./components/SquareIcon.js";

...
<SquareIcon />
...
```

#### Option 2

Place your svg files under a `svgs` directory (or whatever) and load them into the src of img tags.
```
# @/src/App.js
...
import SquareIcon from "./svgs/square.svg";
...
<img src={SquareIcon} alt="Square Icon" />
...
```

That's it.
