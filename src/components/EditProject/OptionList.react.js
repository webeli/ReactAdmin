import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class OptionList extends Component {

    render() {
        console.log(this.props.options);
        let optionList = null;
        let options = this.props.options;
        if (options) {
            optionList = Object.keys(options).map(option => {
                return (
                    <Panel key={option} header={options[option].val.title} eventKey={option}>
                        <p>{options[option].val.desc}</p>
                        <p>{options[option].val.price}</p>
                        <img src={options[option].val.image} height="100px" width="100px" />
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