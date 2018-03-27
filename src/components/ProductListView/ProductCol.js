import React from 'react';
import { Link } from 'react-router-dom';
import ProductContent from './ProductContent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showSizes, hideSizes } from '../../actions';
import './ProductCol.css';

const ProductCol = ({ shoe, showSizes, hideSizes }) => {
  return (
    <div
      className="column is-3"
      onMouseEnter={ () => showSizes(shoe.id) }
      onMouseLeave={ hideSizes }
    >
      <Link to={ `/${shoe.id}` }>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={ shoe.imgURL } alt={ `${shoe.brand} ${shoe.model}` }/>
            </figure>
          </div>
          <ProductContent shoe={ shoe } />
        </div>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  showSizes,
  hideSizes
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ProductCol);
