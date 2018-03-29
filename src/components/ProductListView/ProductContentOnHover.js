import React from 'react';
import ProductSizes from './ProductSizes';
import DetailStars from '../ProductDetailView/DetailStars';
import { connect } from 'react-redux';
import './ProductContentOnHover.css';

const ProductContentOnHover = ({ shoe, hoverId }) => {
  const divClass = shoe.id === hoverId ? "fadeIn" : "sizes-hidden";

  return (
    <div className={ divClass }>
      { shoe.id === hoverId ?
        <DetailStars rating={ shoe.avg_star_count } /> :
        <div></div>
      }
      <ProductSizes shoe={ shoe } />
    </div>
  );
}

const mapStateToProps = (state) => ({ hoverId: state.hoverId });

export default connect(
  mapStateToProps
)(ProductContentOnHover);
