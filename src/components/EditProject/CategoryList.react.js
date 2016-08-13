import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import ItemList from './ItemList.react';

class CategoryList extends Component {

    render() {
        console.log(this.props);
        let categoryList = null;
        let categories = this.props.categories;
        if (categories) {
            categoryList = Object.keys(categories).map(category => {
                return (
                    <Panel key={category} header={categories[category].title} eventKey={category}>
                        <ItemList projectKey={this.props.projectKey} items={categories[category].refs} />
                    </Panel>
                )
            });
        }
        return (
            <Accordion>
                {categoryList}
            </Accordion>
        );
    }
}

export default CategoryList;