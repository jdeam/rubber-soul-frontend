import React from 'react';
import './ProductSizes.css';
import DetailStars from '../ProductDetailView/DetailStars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSizeDropdown } from '../../actions';

const ProductSizes = ({ shoe, hover_id, rating, setSizeDropdown }) => {
  const sizes = shoe.sizes.filter(size => {
      return Object.values(size)[0];
    }).map(size => {
      return Object.keys(size)[0];
    });

  // const priceStyle = {
  //   float: 'right',
  //   fontWeight: 'bold'
  // };

  const tagStyle = {
    margin: '1%'
  };

  const divClass = shoe.id === hover_id ? "tags fadeIn" : "sizes-hidden";

  return (
    <div className={ divClass }>
      { rating? <DetailStars rating={ rating } /> : null }
      {/* <p>{ rating }</p> */}
      { sizes.map((size, i) => {
        return <span
          key={ i }
          className="tag"
          value={ size }
          onClick={ (e) => console.log('SPAN', size) }
          // onClick={ (e) => setSizeDropdown(size) }
          style={ tagStyle }>{ size }
        </span>
      }) }
    </div>
  );
}

const mapStateToProps = (state) => ({ hover_id: state.hover_id });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSizeDropdown
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSizes);
