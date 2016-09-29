import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryItemList from './CategoryItemList.react';

import ModalNewCategoryItem from './Modal/Modal_New_CategoryItem';
import ModalNewCategory from './Modal/Modal_New_Category';
import ModalEditCategory from './Modal/Modal_Edit_Category';
import ModalDeleteCategory from './Modal/Modal_Delete_Category';

class CategoryList extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalNewCategoryItem: false,
            modalNewCategory: false,
            modalEditCategory: false,
            modalDeleteCategory: false,
            categoryKey: null
        };
    }

    render() {
        let modalNewCategoryItem = () => this.setState({ modalNewCategoryItem: false });

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
                            <Button bsStyle="default" onClick={()=>this.setState({ categoryKey:category, modalNewCategoryItem:true })}>+ ITEM</Button>
                        </ButtonToolbar>
                        <br />
                        <CategoryItemList items={categories[category].refs} />
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
                <ModalNewCategoryItem categoryKey={this.state.categoryKey} show={this.state.modalNewCategoryItem} onHide={modalNewCategoryItem} />
                <ModalNewCategory show={this.state.modalNewCategory} onHide={modalNewCategory} />
                <ModalEditCategory show={this.state.modalEditCategory} onHide={modalEditCategory} />
                <ModalDeleteCategory show={this.state.modalDeleteCategory} onHide={modalDeleteCategory} />
                <Panel header="New Category">
                    <ButtonToolbar>
                        <Button bsStyle="default" onClick={()=>this.setState({ modalNewCategory: true })}>+ New Category</Button>
                    </ButtonToolbar>
                </Panel>
                {categoryList}
            </div>
        );
    }
}

export default CategoryList;