import React from 'react';

const ProductDetailItemTable = ({shoeColor, shoeTags}) => {

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td className="has-text-right">
              <strong>Item ID</strong>
            </td>
            <td>1234</td>
          </tr>
          <tr>
            <td className="has-text-right">
              <strong>Color</strong>
            </td>
            <td>{`${shoeColor}`}</td>
          </tr>
          <tr>
            <td className="has-text-right">
              <strong>Tags</strong>
            </td>
            <td>{`${shoeTags}`}</td>
          </tr>
          <tr>
            <td className="has-text-right">
              <strong>Views</strong>
            </td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductDetailItemTable
