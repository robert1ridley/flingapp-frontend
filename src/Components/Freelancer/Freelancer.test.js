import React from 'react';
import ReactDOM from 'react-dom';
import Freelancer from './Freelancer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Freelancer/>, div);
});
