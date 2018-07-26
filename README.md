# icomoon-react

React Component which let you use icomoon selection.json file to display svg's icons

for YARN:
```
yarn add icomoon-react
```
for NPM:
```
npm install icomoon-react
```

##How to use:

use `selection.json` generated from http://icomoon.io/app

```
import iconSet from 'somewhere/selection.json'
import IcomoonReact, {iconList} from 'icomoon-react'
```

than just use component in code:

```
<IcomoonReact iconSet={iconSet} color="#444" size={100} icon="shower" />
```

To console.log all icons use: `iconList(iconSet)` function

To not include set all over again just create your wraper component:

####Icon.js
```
import React from "react";
import iconSet from "somewhere/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Icon = props => (
  <IcomoonReact
    iconSet={iconSet}
    color={props.color || '#f00'}
    size={props.size || 100}
    icon={props.icon}
  />
);
export default Icon;
```

###App.js
```
import React, { Component } from "react";
import Icon from "./Icon";

class App extends Component {
  render() {
    return (
      <div>
          <Icon icon="bath" />
      </div>
    );
  }
}

export default App;

```