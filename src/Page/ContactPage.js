import React, { Component } from 'react';
import Row from './Contact/Row.js';
import Social from './Contact/Social.js';

class ContactPage extends Component {
    constructor () {
        super();
        this.state = {
            rows: [
                [
                    <p>Hello</p>,
                    <p>My name is <b>Māris</b>, but on the world wide web I prefer naming myself <b>waplet</b></p>,
                    <p>In 2016 I graduated from University of Latvia, Faculty of Computing - <b>BSc Computer Science</b></p>,
                    <hr/>,
                    <p>I have made my career as a <b>Web Developer</b> and topics I am involved in are: <b>PHP, MySQL</b>, <span className="half-bold">Symfony, Laravel, Linux, Javascript</span>, payment gateways, Python, etc. Basically everything that is or may come handy as a web developer. But that does not mean that I do not want to learn new things. I would really like to try my hand at electronics/hardware.</p>,
                    <p>As a developer I like to create my everyday life easier. All of my open-source apps can be found at my <a href="http://github.com/waplet">github</a> profile.,
                    <hr/>,
                    <p>If You find me interesting, You can always contact me in any of social sites listed below</p>,
                ],
                <Social type="github" />,
                <Social type="linkedin" />,
                <Social type="twitter" />,
                <Social type="facebook" />
            ],
        };
    }

    render () {
        return (
            <div className="col-xs-12 col-xs-offset-0 col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                {this.state.rows.map(function (row, i) {
                    return <Row key={i} content={row} />
                })};
            </div>
        )
    }
}

export default ContactPage;
