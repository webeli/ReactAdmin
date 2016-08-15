import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class OptionList extends Component {

    render() {
        let optionList = null;
        let options = this.props.options;
        if (options) {
            optionList = Object.keys(options).map(option => {
                return (
                    <Panel key={option} header={options[option].val.title} eventKey={option}>
                        <p>{options[option].val.title}</p>
                    </Panel>
                )
            });
        }
        return (
            <div>
                {optionList}
            </div>
        );
    }
}

export default OptionList;