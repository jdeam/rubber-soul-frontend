import React from 'react';
import { Link } from 'react-router-dom';

const ProductCol = ({ shoe }) => {
  const shoePrice = {
    float: 'right',
    fontWeight: 'bold'
  };

  return (
    <div className="column is-3">
      <Link to={ `/shoes/${shoe.id}` }>
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={ shoe.imgURL } alt={ `${shoe.brand} ${shoe.model}` }/>
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{ shoe.model }</p>
            <p className="subtitle is-6">
              { shoe.brand }
              <span
                className="shoe-price"
                style={ shoePrice }
                >{ `$${shoe.price.toFixed(2)}` }
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCol;
