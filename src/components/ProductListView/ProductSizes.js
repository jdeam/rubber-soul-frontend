import React from 'react';
import { connect } from 'react-redux';
import './ProductSizes.css';

const ProductSizes = ({ shoe, hoverId }) => {
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

const mapStateToProps = (state) => ({ hoverId: state.hoverId });

export default connect(
  mapStateToProps,
)(ProductSizes);
