import React from 'react';
import App from './App';
import './tests/setup';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('shows title correctly', () => {
    const component = shallow(<App />);
    expect(component.find('.app-title').text()).toMatch(/Card Matching Game/);
  });
});

