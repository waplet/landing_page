import React, { Component } from 'react';
import Row from './Contact/Row.js';

class ContactPage extends Component {
    constructor () {
        super();
        this.state = {
            posts: [
                "Hello,",
                "My name is <b>Māris</b>, but on the world wide web I prefer naming myself <b>waplet</b>",
                "In 2016 I graduated from University of Latvia, Faculty of Computing - <b>BSc Computer Science</b>"
                                                                       ]
        };
    }

    render () {
        return (
            <div className="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                <Row posts={this.state.posts}/>
            </div>
        )
    }
}

export default ContactPage;
