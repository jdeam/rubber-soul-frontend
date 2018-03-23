import React from 'react';
import ProductRow from './ProductRow'

const ProductRows = ({ shoes }) => {
  const shoeRows = shoes.reduce((rows, shoe, i) => {
    if (i%4===0) rows.push([]);
    rows[rows.length-1].push(shoe);
    return rows;
  }, []);

  return (
    <div>
      {
        shoeRows.map((shoeRow, i) => {
          return <ProductRow key={ i } shoes={ shoeRow } />
        })
      }
    </div>
  );
}

export default ProductRows;
