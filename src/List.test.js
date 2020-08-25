import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import render from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List
        header = "Fourth List"
        cards = {[{id: 1, title: 'malik-tim', content: 'alex'}]}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders as expected', () => {
      const tree = render.create(<List
        header = "Fourth List"
        cards = {[{id: 1, title: 'malik-tim', content: 'alex'}]}
    />).toJSON()
    expect(tree).toMatchSnapshot()
  });
  