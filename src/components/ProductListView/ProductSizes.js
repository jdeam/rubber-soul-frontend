import React from 'react';
import { connect } from 'react-redux';
import './ProductSizes.css';

const ProductSizes = ({ shoe, hover_id }) => {
  const sizes = shoe.sizes.filter(size => {
      return Object.values(size)[0];
    }).map(size => {
      return Object.keys(size)[0];
    });

  const priceStyle = {
    float: 'right',
    fontWeight: 'bold'
  };

  const tagStyle = {
    margin: '1%'
  };

  const divClass = shoe.id === hover_id ? "tags fadeIn" : "sizes-hidden";

  return (
    <div className={ divClass }>
      { sizes.map((size, i) => {
        return <span
          key={ i }
          className="tag"
          style={ tagStyle }>{ size }
        </span>
      }) }
    </div>
  );
}

const mapStateToProps = (state) => ({ hover_id: state.hover_id });

export default connect(
  mapStateToProps,
)(ProductSizes);
