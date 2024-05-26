import React from 'react'

const Title = ({ name, dec }) => {
  return (
    <>
      <div className="section-title">
        <h2>{name}</h2>
        <p>{dec}</p>
      </div>
    </>
  )
}

export default Title