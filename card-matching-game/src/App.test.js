import React from 'react';
import './tests/setup';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('shows title correctly', () => {
    const component = shallow(<App />);
    expect(component.find('.app-title').text()).toMatch(/Card Matching Game/);
  });

  it('starts with the gameState equal Stopped', () => {
    const component = shallow(<App />);
    const appState = component.state().gameState
    expect(appState).toEqual(0);
  })
  
});

