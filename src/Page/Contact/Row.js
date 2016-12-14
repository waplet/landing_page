import React, { Component } from 'react';

class Row extends Component {
    render () {
        return (
            <div className="row contact_row">
                {this.props.posts.map((content) =>
                    <p>{content}</p>
                )}
            </div>
        )
    }
}

export default Row;
