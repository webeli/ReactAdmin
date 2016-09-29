import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryItemList from './CategoryItemList.react';

import ModalNewItem from './Modal/Modal_New_Item';
import ModalNewCategory from './Modal/Modal_New_Category';
import ModalEditCategory from './Modal/Modal_Edit_Category';
import ModalDeleteCategory from './Modal/Modal_Delete_Category';

class CategoryList extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalNewItem: false,
            modalNewCategory: false,
            modalEditCategory: false,
            modalDeleteCategory: false
        };
    }

    render() {
        let modalNewItem = () => this.setState({ modalNewItem: false });

        let modalNewCategory = () => this.setState({ modalNewCategory: false });
        let modalEditCategory = () => this.setState({ modalEditCategory: false });
        let modalDeleteCategory = () => this.setState({ modalDeleteCategory: false });

        let categoryList = null;
        let categories = this.props.categories;
        if (categories) {
            categoryList = Object.keys(categories).map(category => {
                return (
                    <Panel key={category} header={categories[category].title} eventKey={category}>
                        <ButtonToolbar>
                            <Button bsStyle="default" bsSize="xsmall" onClick={()=>this.setState({ modalNewItem: true })}>+ ITEM</Button>
                        </ButtonToolbar>
                        <br />
                        <CategoryItemList projectKey={this.props.projectKey} items={categories[category].refs} />
                        <br />
                        <ButtonToolbar>
                            <Button bsStyle="danger" bsSize="xsmall" onClick={()=>this.setState({ modalDeleteCategory: true })}>Delete {categories[category].title}</Button>
                            <Button bsStyle="primary" bsSize="xsmall" onClick={()=>this.setState({ modalEditCategory: true })}>Edit {categories[category].title}</Button>
                        </ButtonToolbar>
                    </Panel>
                )
            });
        }
        return (
            <div>
                <ModalNewItem show={this.state.modalNewItem} onHide={modalNewItem} />
                <ModalNewCategory show={this.state.modalNewCategory} onHide={modalNewCategory} />
                <ModalEditCategory show={this.state.modalEditCategory} onHide={modalEditCategory} />
                <ModalDeleteCategory show={this.state.modalDeleteCategory} onHide={modalDeleteCategory} />
                <Panel header="New Category">
                    <ButtonToolbar>
                        <Button bsStyle="default" bsSize="small" onClick={()=>this.setState({ modalNewCategory: true })}>+ New Category</Button>
                    </ButtonToolbar>
                </Panel>
                {categoryList}
            </div>
        );
    }
}

export default CategoryList;