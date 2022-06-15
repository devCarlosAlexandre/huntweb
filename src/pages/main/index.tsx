import React, { Component } from "react";
import api from "../../services/api";
import '../../pages/main/styles.css';

export default class Main extends Component {

    state = {
        products: [],
        productsInfo: {},
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products.json');
        this.setState({ products: response.data });
    }

    prevPage = () => { }

    nextPage = () => { }

    render() {
        const { products } = this.state;
        return (< div className="product-list" > {
            products.map(products => (<article >
                < img src={products.image_link} > < /img>
                    < h2 key={products.id} >
                        {products.name}
                        < /h2> <strong >
                            {products.name}
                            < /strong>
                            < p >
                                {products.description}
                                < /p> <a > Para acessar basta clicar neste botão
                                    < /a>
                                </article>


                                ))
            } <div className="actions" >
                                    <button onClick={this.prevPage} > ir ao proximo < /button> < button onClick={this.nextPage} > Ir ao anterior < /button> < /div>
                                        );
    }
}
