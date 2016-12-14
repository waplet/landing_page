import React, { Component } from 'react';
import _ from 'lodash';

class Social extends Component {
    constructor (props) {
        super();
        this.state = {
            type: props.type,
        };
    }

    componentDidMount() {
        this.assignLink();
    }

    assignLink () {
        var typeLinkMapping = {
            github: {
                link: 'http://github.com/waplet',
                label: 'GitHub'
            },
            linkedin:  {
                link: 'https://lv.linkedin.com/in/waplet',
                label: 'LinkedIn'
            },
            twitter:  {
                link: 'http://twitter.com/@waplet',
                label: 'Twitter'
            },
            facebook:  {
                link: 'http://facebook.com/waplet',
                label: 'Facebook'
            },
        };

        if (_.has(typeLinkMapping, this.state.type)) {
            this.setState({ link: typeLinkMapping[this.state.type].link });
            this.setState({ label: typeLinkMapping[this.state.type].label });
        } else {
            this.setState({ link: '/' });
            this.setState({ label: 'waplet' });
        }
    }

    render () {
        var sliderClass = `contact_row__block__slider slider-${this.state.type}`

        return (
            <div className="contact_row__block">
                <a href={ this.state.link }>
                    <img className="contact_row__block__icon" alt={this.state.type} src={'/images/' + this.state.type + '.png'}/>
                </a>
                <div className={ sliderClass }>
                    { this.state.label }
                </div>
            </div>
        )
    }
}

export default Social;