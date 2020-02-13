import React from 'react'
import '../App.css'


const Error = ({ errorMsg }) => {

  return (
    <div className="alert alert-danger" role="alert">
      {errorMsg}
    </div>
  )
}

export default Error

