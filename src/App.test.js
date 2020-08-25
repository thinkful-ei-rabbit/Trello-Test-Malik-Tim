import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import render from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App
    store = {{ 
      lists: [],
      allCards: {}    
  }}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders as expected', () => {
  const tree = render.create(<App
    store = {{ 
      lists: [],
      allCards: {}    
  }}
  />).toJSON()
expect(tree).toMatchSnapshot()
});