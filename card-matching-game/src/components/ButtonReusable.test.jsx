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
    const gameStateDisplay = appComponent.find('div#display').text();
    expect(gameStateDisplay).toMatch(/Press Start to run the game!/);
    const button = appComponent.find('.btn');
    button.simulate('click');
    expect(appComponent.find('.App').text()).not.toMatch(/Press Start to run the game!/);
    
  })
});

