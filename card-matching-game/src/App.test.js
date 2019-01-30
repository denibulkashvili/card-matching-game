import React from 'react';
import './tests/setup';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  it('shows title correctly', () => {
    const component = shallow(<App />);
    expect(component.find('.title').text()).toMatch(/Card Matching Game/);
  });

  it('starts with the isGameRunning equal false', () => {
    const component = shallow(<App />);
    const appState = component.state().isGameRunning
    expect(appState).toEqual(false);
  })
  
});

