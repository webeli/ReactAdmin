import React, { Component } from 'react';
import OptionList from './OptionList.react';

class OptionListContainer extends Component {

    render() {
        return (
            <OptionList projectKey={this.props.projectKey}/>
        );
    }
}

export default OptionListContainer;