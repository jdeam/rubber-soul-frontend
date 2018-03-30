import React from 'react';
import { Link } from 'react-router-dom';
import ProductContent from './ProductContent';
import ProgressiveImage from 'react-progressive-image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showSizes, hideSizes } from '../../actions';
import './ProductCol.css';
import placeholder from './222x222.png';

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
              <ProgressiveImage src={shoe.imgURL} placeholder={placeholder} >
                  {(src => <img src={src} alt={`${shoe.brand} ${shoe.model}`} />)}
              </ProgressiveImage>
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
