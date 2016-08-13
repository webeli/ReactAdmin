import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';

class CategoryList extends Component {

    render() {
        console.log(this.props.categories);
        let categoryList = null;
        if (this.props.categories) {
            let count = 0;
            categoryList = this.props.categories.map(category => {
                count++;
                return (
                    <Panel key={count} header={category.title} eventKey={count}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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