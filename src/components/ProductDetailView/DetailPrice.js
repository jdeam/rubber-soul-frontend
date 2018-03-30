import React from 'react';

const DetailPrice = ({shoePrice}) => {

  return (
    <div>
      {/* <div className="title is-2">Item Title</div> */}
      <p className="is-2 has-text-muted">${`${shoePrice.toFixed(2)}`}</p>
    </div>
  )
}

export default DetailPrice
