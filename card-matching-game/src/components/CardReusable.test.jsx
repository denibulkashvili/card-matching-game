import React from 'react';
import '../tests/setup';
// import { shallow } from 'enzyme';
import Card from './CardReusable';
import renderer from 'react-test-renderer';

describe('<Card /> component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Card />);
    expect(tree).toMatchSnapshot()
  })
});