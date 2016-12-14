import React, { Component } from 'react';

class Row extends Component {
    render () {

        return (
            <div className="row contact_row">
                { this.props.content }
            </div>
        )
    }
}

export default Row;