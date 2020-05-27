import React, { Component } from 'react';
import Layout from '../components/layout';
import Card from '../components/card';
import {getStore, getAllProducts} from '../services/store.service';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true
        };
    }

    componentDidMount = async() => {
        const info = await getStore();
        const response = await getAllProducts();
        this.setState({ products: response.products, isLoading: false});
    }

    render() {
        const {products, isLoading} = this.state;
        return(
            <Layout>
                <div className='d-flex justify-content-center my-5'>
                    <h1>CCI NIKE STORE</h1>
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    {!isLoading && products.map((elm,i) => (
                        <Card 
                            title={elm.title} 
                            img={elm.image.src} 
                            desc={elm.body_html.replace('<span>', '').replace('</span>', '')}
                            price={elm.variants[0].price}
                            key={i} 
                        />
                    ))}
                </div>
            </Layout>
        )
    }

}

export default Home;