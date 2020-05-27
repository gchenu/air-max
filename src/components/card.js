import React from 'react';

const Card = ({title, img, desc, price}) => (
    <div className="card mx-5 my-3" style={{width: '400px'}}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{price} XPF</h6>
            <p className="card-text overflow-hidden" style={{height: '200px'}}>{desc}</p>
            <a href="#" className="btn btn-primary">Add To Cart</a>
        </div>
    </div>
);

export default Card;