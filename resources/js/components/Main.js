import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
/* An example React component */
class Main extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        /* fetch API in action */
        fetch('/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ products });
            });
      }
     

    render() {
        return (
            <div>
                <ul>
                { this.renderProducts() }
              </ul> 
            </div>
        );
    }

    renderProducts() {
    return this.state.products.map(product => {
        return (
                /* When using list you need to specify a key
                    * attribute that is unique for each list item
                */
                <li key={product.id} >
                    { product.title }
                    { product.description } 
                </li>      
            );
        })
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}