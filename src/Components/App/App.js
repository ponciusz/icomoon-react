import React from 'react';
import IcomoonReact, { iconList } from '../IcomoonReact';
import iconSet from '../../assets/icons/selection.json';

const App = () => (
  <div>
    <IcomoonReact iconSet={iconSet} color="#444" size={100} icon="bath" />
    {console.table(iconList(iconSet))}
  </div>
);

export default App;
