import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import iconSet from '../../assets/icons/selection.json';
import IcomoonReact, { iconList } from './IcomoonReact';

Enzyme.configure({ adapter: new Adapter() });

describe('IcomoonReact component', () => {
  it('should be defined', () => {
    expect(IcomoonReact).toBeDefined();
  });
});

describe('iconList function', () => {
  it('should be defined', () => {
    expect(iconList(iconSet)).toBeDefined();
  });

  const expected = [
    'envelope-o',
    'star',
    'home',
    'clock-o',
    'repeat',
    'edit',
    'info-circle',
    'globe',
    'group',
    'exchange',
    'mobile',
    'smile-o',
    'frown-o',
    'logo-colored',
  ];
  it('should return array of icons', () => {
    expect(iconList(iconSet)).toEqual(expect.arrayContaining(expected));
  });
});
