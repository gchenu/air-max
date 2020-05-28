import React, {useState} from 'react';
import {Dropdown, Button} from 'react-bootstrap';

const Card = ({title, img, desc, price, varients, onAddCart, id}) => {
  const [size, setSize] = useState({title: varients[0].title, id: varients[0].id});
  return(
    <div className="card mx-5 my-3" style={{width: '400px'}}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{price} XPF</h6>
            <p className="card-text overflow-hidden" style={{height: '200px'}}>{desc}</p>
            <div className="d-flex justify-content-around">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {size.title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {varients && varients.map((elm, i) => (
                    <Dropdown.Item key={i} onClick={() => setSize({title: elm.title, id: elm.id})}>{elm.title}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button
                variant="primary"
                onClick={() => onAddCart({
                  id: size.id,
                  title: title,
                  img: img,
                  price: price
                })}
              >Add To Cart</Button>
            </div>
        </div>
    </div>
)};

export default Card;
