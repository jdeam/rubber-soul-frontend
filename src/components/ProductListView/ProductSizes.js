import React from 'react';
import './ProductSizes.css';
import DetailStars from '../ProductDetailView/DetailStars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedSize } from '../../actions';

const ProductSizes = ({ shoe, hoverId, rating, setSelectedSize }) => {
  const sizes = shoe.sizes.filter(size => {
      return Object.values(size)[0];
    }).map(size => {
      return Object.keys(size)[0];
    });

  const tagStyle = {
    margin: '1%'
  };

  const divClass = shoe.id === hoverId ? "tags fadeIn" : "sizes-hidden";

  return (
    <div className={ divClass }>
      { rating? <DetailStars rating={ rating } /> : null }
      <div>
        { sizes.map((size, i) => {
          return <span
            key={ i }
            className="tag"
            value={ size }
            onClick={ () => setSelectedSize(size)  }
            style={ tagStyle }
          >{ size }</span>
        }) }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ hoverId: state.hoverId });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedSize
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSizes);
