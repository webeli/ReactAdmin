import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

class OptionList extends Component {

    render() {
        let optionList = null;
        let options = this.props.options;
        if (options) {
            optionList = Object.keys(options).map(option => {
                return (
                    <Panel key={option} header={options[option].title} eventKey={option}>
                        <p>{options[option].desc}</p>
                        <p>{options[option].price}</p>
                        <img src={options[option].image} height="100px" width="100px" alt={options[option].title}/>
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

function mapStateToProps(state, ownProps) {
    return {
        options: state.options
    };
}
export default connect(mapStateToProps)(OptionList);