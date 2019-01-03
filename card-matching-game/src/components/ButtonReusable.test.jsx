import React from 'react';
import '../tests/setup';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Button from './ButtonReusable';

describe('<Button />', () => {
  it('displays a button labeled Start', () => {
    const component = shallow(<Button buttonLabel="Start"/>);
    const text = component.find('.btn').text();
    expect(text).toEqual('Start');
  })

  it('simulates click event', () => {
    const appComponent = mount(<App />);
    const button = appComponent.find('.btn');
    button.simulate('click');
    const gameStateDisplay = appComponent.find('div#display').text();
    expect(gameStateDisplay).toMatch(/This is a display grid. The game is now Running./);
  })
});

