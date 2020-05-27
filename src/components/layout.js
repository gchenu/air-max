import React, {Component} from 'react';
import Header from '../components/header';
import Cart from '../components/cart';

class Layout extends Component {

    render() {
        return(
            <div>
                <Header />
                <div className='container'>
                    {this.props.children}
                </div>
                <Cart />
            </div>
            
        )
    }
}

export default Layout;