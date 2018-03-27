import React from 'react';
import './DetailSizeDropdown.css';

const DetailSizeDropdown = ({ sizes, setSelectedSize }) => {

  const availableSizes = sizes ?
    sizes.filter(size => {
      return Object.values(size)[0];
    }).map(size => {
      return Object.keys(size)[0];
    }) : [];

  return (
    <div id="Detail-size-dropdown">
      <p><strong>Size</strong></p>
        <div className="control">
          <div className="select">
            <select onChange={ (e) => setSelectedSize(e.target.value) }>
              <option>Select Size</option>
              { availableSizes.map((size, i) => {
                return (
                  <option key={i}>{`${size}`}</option>
                )
              }) }
            </select>
          </div>
        </div>
    </div>
  )
}

export default DetailSizeDropdown
