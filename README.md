[![Build Status](https://travis-ci.org/ponciusz/icomoon-react.svg?branch=master)](https://travis-ci.org/ponciusz/icomoon-react)

# icomoon-react

React Component which let you use icomoon selection.json file to display svg's icons. 

Short example can be found [here](https://codesandbox.io/s/q89onw1kqq)

installation with YARN:
```
yarn add icomoon-react
```
installation with  NPM:
```
npm install icomoon-react
```

## Quick usage:

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

## Advanced usage:

To not include set all over again just create your wraper component:

#### Icon.js
```
import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from '../IcomoonReact';
import iconSet from '../../assets/icons/selection.json';

const Icon = (props) => {
  const { color, size, icon } = props;
  return <IcomoonReact 
    iconSet={iconSet} 
    color={color || '#f00'} 
    size={size || 100} 
    icon={icon} 
  />;
};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Icon;
```

### App.js
```
import React from 'react';
import Icon from '../Icon';

const App = () => (
  <div>
    <Icon color="#444" size={100} icon="bath" />
  </div>
);

export default App;
```

# Develop

clone repo `git clone git@github.com:ponciusz/icomoon-react.git`

`yarn install`

`yarn start`
