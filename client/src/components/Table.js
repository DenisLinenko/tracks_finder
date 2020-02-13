import React from 'react'
import '../App.css'


const Table = ({ results , handleClick }) => {

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Artist</th>
        </tr>
      </thead>
      <tbody>
        {results.map((element) => 
          <tr key={element[0]}>
            <th scope="row">
              <button onClick={() => {handleClick(element[0])}}  style={{background: "none", border: "none", padding: "0", 
              color: "#069", textDecoration: "underline", cursor: "pointer"}}>{element[0]}</button>
              </th>
            <td>{element[1].track_title}</td>
            <td>{element[1].artist}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table

