import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class OptionList extends Component {

    render() {
        console.log(this.props);
        let optionList = null;
        let options = this.props.options;
        if (options) {
            optionList = Object.keys(options).map(category => {
                return (
                    <Panel key={category} header={options[category].title} eventKey={category}>
                        <ItemList projectKey={this.props.projectKey} items={options[category].refs} />
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