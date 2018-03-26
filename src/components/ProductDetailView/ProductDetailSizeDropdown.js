import React from 'react';
import './ProductDetailSizeDropdown.css'

const ProductDetailSizeDropdown = ({shoeSizes}) => {
  let shoeData = shoeSizes.map((shoeData, i) => {
    for (let key in shoeData) {
      let qty = shoeData[key];
      return { key, qty };
    }
  })
  console.log('?????', shoeData);

  let qtyRemaining = shoeData.find(shoe => {
    console.log('SHOEEE', shoe);
  })

  return (
    <div id="ProductDetail-size-dropdown">
      <p><strong>Size</strong></p>
        <div className="control">
          <div className="select">
            <select>
              <option>Select Size</option>
              { shoeData.map((size, i) => {
                return (
                  <option key={i}>{`${size.key}`}</option>
                )
              }) }
            </select>
            { shoeData.map((size, i) => {
              return (
                 size.qty <= 3 ? (<div id="ProductDetail-qty-remaining">
                  { `Hurry, Only ${size.qty} left!` }
                </div>) : <div>did it?</div>
              )
            }) }
            {/* { size.qty <= 3 ? (<div id="ProductDetail-qty-remaining">
              { `Hurry, Only ${size.qty} left!` }
            </div>) : <div>did it?</div> } */}
          </div>
        </div>
    </div>
  )
}

export default ProductDetailSizeDropdown
