import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({comment: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button>Submit comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);