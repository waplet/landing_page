import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            title: 'waplet',
            subtitle: 'living in a great world'
        };
    }

    render() {
        return (
            <header>
                <div className="header">
                    <h1 className="header__title">{this.state.title}</h1>
                    <h2 className="header__subtitle">{this.state.subtitle}</h2>
                </div>
            </header>
        );
    }
}

export default Header;