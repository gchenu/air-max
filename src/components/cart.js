import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {createOrder} from '../services/store.service';

const Cart = ({show, cart, onClose, onClearCart}) => {
  const handleClose = () => onClose(false);
  const handleClearCart = () => onClearCart();
  const handleValidate = async() => {
    const products = cart.map(elm => ({
      variant_id: elm.id,
      quantity: 1
    }));
    const response = await createOrder({
      order: {
        line_items: products
      }
    });
    if(response.errors){
      alert(response.errors);
    } else {
      handleClose();
      handleClearCart();
      alert('Commande réussie!');
    }
  }

  return(
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group">
            {cart.length > 0 ? (
              cart.map((elm, i) => (
                <li className="list-group-item" key={i}>
                  <div className="d-flex justify-content-between">
                    <p>{elm.title}</p>
                    <p>{elm.price} CFP</p>
                  </div>
                </li>
              ))
            ) : (
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <p>Votre panier ne contient aucun article...</p>
                </div>
              </li>
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClearCart}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleValidate}>
            BUY
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Cart;
