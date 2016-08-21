import React, { Component } from 'react';
import { Panel, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryItemList from './CategoryItemList.react';

class CategoryList extends Component {

    render() {
        let categoryList = null;
        let categories = this.props.categories;
        if (categories) {
            categoryList = Object.keys(categories).map(category => {
                return (
                    <Panel key={category} header={categories[category].title} eventKey={category}>
                        <ButtonToolbar>
                            <Button bsStyle="default" bsSize="xsmall" block>+ ITEM</Button>
                        </ButtonToolbar>
                        <br />
                        <CategoryItemList projectKey={this.props.projectKey} items={categories[category].refs} />
                    </Panel>
                )
            });
        }
        return (
            <div>
                {categoryList}
            </div>
        );
    }
}

export default CategoryList;