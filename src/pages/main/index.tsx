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
        () = () => ;
        
    }
}
