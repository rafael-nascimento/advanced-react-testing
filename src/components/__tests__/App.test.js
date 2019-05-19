import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('Should show the comment box.', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('I\'m the CommentBox component!')

    ReactDOM.unmountComponentAtNode(div);
});