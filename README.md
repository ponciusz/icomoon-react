[![Build Status](https://travis-ci.org/ponciusz/icomoon-react.svg?branch=master)](https://travis-ci.org/ponciusz/icomoon-react) [![Coverage Status](https://coveralls.io/repos/github/ponciusz/icomoon-react/badge.svg?branch=master)](https://coveralls.io/github/ponciusz/icomoon-react?branch=master)

# icomoon-react

![Hero Image](/images/hero.png)

React Component which let you use icomoon `selection.json` file to render SVG instead font

Short example can be found [here](https://codesandbox.io/s/q89onw1kqq)

installation with YARN:

```
yarn add icomoon-react
```

installation with NPM:

```
npm install icomoon-react
```

## Quick usage:

use `selection.json` generated from http://icomoon.io/app

- add your desired icons, select from ready library or add custom svg's
- once done click Generate Font
- click Download
- unzip package and grab your `selection.json`

```js
import iconSet from "somewhere/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
```

than just use component in code:

```js
<IcomoonReact iconSet={iconSet} color="#444" size={100} icon="shower" />
```

To console.log all icons use: `iconList(iconSet)` function

## Advanced usage:

To not include set all over again just create your wraper component:

#### Icon.tsx

```js
import React from "react";

import IcomoonReact from "../IcomoonReact";
import iconSet from "./pathToSelection/selection.json";

const Icon: React.FC<{
  color?: string,
  size: string | number,
  icon: string,
  className?: string
}> = props => {
  const { color, size = "100%", icon, className = "" } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;
```

### App.tsx

```js
import React from "react";
import Icon from "./Icon";

const App = () => (
  <div>
    <Icon color="#444" size={100} icon="star" />
  </div>
);

export default App;
```

# Develop

clone repo `git clone git@github.com:ponciusz/icomoon-react.git`

`yarn install`

`yarn start`
