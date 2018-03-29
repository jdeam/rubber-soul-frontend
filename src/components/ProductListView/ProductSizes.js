import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedSize } from '../../actions';

const ProductSizes = ({ shoe, setSelectedSize }) => {
  const sizes = shoe.sizes.filter(size => {
      return Object.values(size)[0];
    }).map(size => {
      return Object.keys(size)[0];
    });

  return (
    <div className="tags">
      { sizes.map((size, i) => {
        return (
          <span
            key={ i }
            className="tag"
            value={ size }
            onClick={ () => setSelectedSize(size)  }
            style={ { margin: '1%'} }
          >
            { size }
          </span>
        );
      }) }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedSize
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ProductSizes);
