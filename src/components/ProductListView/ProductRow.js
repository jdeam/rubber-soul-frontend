import React from 'react';
import ProductCol from './ProductCol'

class ProductRow extends React.Component {
  render() {
    return (
      <div className="columns">
        {
          this.props.shoes.map((shoe, i) => {
            return <ProductCol key={ i } shoe={ shoe } />
          })
        }
      </div>
    )
  }
}

export default ProductRow;
