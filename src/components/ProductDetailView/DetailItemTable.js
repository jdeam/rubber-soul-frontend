import React from 'react';

const DetailItemTable = ({shoeColor, shoeTags}) => {
  const formattedTagList = shoeTags.join(', ');

  return (
    <div>
      <table className="table">
        <tbody>
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
            <td>{ formattedTagList }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailItemTable
