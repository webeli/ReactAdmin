import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import CategoryItemList from './CategoryItemList.react';

class CategoryList extends Component {

    render() {
        let categoryList = null;
        let categories = this.props.categories;
        if (categories) {
            categoryList = Object.keys(categories).map(category => {
                return (
                    <Panel key={category} header={categories[category].title} eventKey={category}>
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