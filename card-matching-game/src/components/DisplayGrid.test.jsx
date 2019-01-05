import React from 'react';
import '../tests/setup';
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import Display from './DisplayGrid';
import App from '../App';

describe('<Display /> component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);
    expect(tree).toMatchSnapshot();
  });
  it('renders 12 images', () => {
    const appWrapper = mount(<App />)
    const button = appWrapper.find('.btn');
    button.simulate('click');
    const images = appWrapper.find('.image');
    expect(images).toHaveLength(12);
  });
  
})