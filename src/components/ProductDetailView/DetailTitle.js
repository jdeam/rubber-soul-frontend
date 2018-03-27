import React from 'react';
import './DetailTitle.css'

const DetailTitle = ({
  shoeBrand,
  shoeModel,
}) => {

  return (
    <div id="Detail-header" className="section">
      <div id="Detail-header-container" className="container">
        <div className="columns">
          <div className="column">
            <span id="Detail-brandname" className="title is-3">{`${shoeModel}`}</span>
            <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
            <span className="title is-4 has-text-muted">{`${shoeBrand}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailTitle
