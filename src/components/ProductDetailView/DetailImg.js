import React from 'react';
import './DetailImg.css'

const DetailImg = ({shoeImg}) => {

  return (
    <div className="column is-6">
      <div className="image is-2by2">
        <img id="Detail-img" src={`${shoeImg}`} alt="product"/>
      </div>
    </div>
  )
}

export default DetailImg
