import React from 'react'
import ReactDOM from 'react-dom';
import App from '../App.js'

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />,div);

  // console.log(div.innerHTML);
  expect(div.innerHTML).toContain('CommentBox');

  ReactDOM.unmountComponentAtNode(div);
})