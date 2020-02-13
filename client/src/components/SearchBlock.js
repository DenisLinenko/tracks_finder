import React from 'react'
import '../App.css'



const SearchBlock = ({ handleStart , handleChange }) => {

  return (
    <div style={{width: "20rem", margin: "50px", marginLeft: "auto", marginRight: "auto"}}>
      <div className="card-body">
        <div className="input-group mb-3">
          <input type="number" className="form-control" placeholder="Choose number" onChange={handleChange}/>
          <div className="input-group-append">
            <button className="input-group-text" onClick={handleStart} style={{cursor: "pointer"}}>Find track</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBlock

