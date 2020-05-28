import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {createOrder} from '../services/store.service';

const Cart = ({show, cart, onClose}) => {

  const handleClose = () => onClose(false);

  const handleValidate = async() => {
    const products = cart.map(elm => ({
      variant_id: elm.id,
      quantity: 1
    }));
    const response = await createOrder(products);
    console.log(response);
  }

  return(
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group">
            {cart && cart.map((elm, i) => (
              <li className="list-group-item" key={i}>
                <div className="d-flex justify-content-between">
                  <p>{elm.title}</p>
                  <p>{elm.price} CFP</p>
                </div>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleValidate}>
            BUY
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Cart;
