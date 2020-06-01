import React, { Component } from 'react';
import Card from '../components/card';
import Cart from '../components/cart';
import Header from '../components/header';
import {getAllProducts} from '../services/store.service';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true,
            cart: [],
            isVisible: false
        };
    }

    componentDidMount = async() => {
        const response = await getAllProducts();
        if(response) {
          this.setState({ products: response.products, isLoading: false});
        } else {
          console.log("API disconnected...");
        }

    }

    setModalVisible = (visible) => this.setState({isVisible: visible});

    addToCart = (product) => this.setState(state => ({cart: [...state.cart, product]}));

    onClearCart = () => this.setState({cart: []});

    render() {
        const {products, isLoading, cart, isVisible} = this.state;
        return(
            <>
                <Header onClickCart={this.setModalVisible} quantity={cart.length} />
                <div className='container'>
                  <div className='d-flex justify-content-center my-5'>
                      <h1>CCI NIKE STORE</h1>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center">
                      {!isLoading && products.map((elm,i) => (
                          <Card
                              id={elm.id}
                              title={elm.title}
                              img={elm.image.src}
                              desc={elm.body_html.replace('<span>', '').replace('</span>', '')}
                              price={elm.variants[0].price}
                              varients={elm.variants}
                              onAddCart={this.addToCart}
                              key={i}
                          />
                      ))}
                  </div>
                </div>
                <Cart
                  show={isVisible}
                  onClose={this.setModalVisible}
                  onClearCart={this.onClearCart}
                  cart={cart}
                />
            </>
        )
    }

}

export default Home;
