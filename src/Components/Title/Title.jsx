import React from 'react'
import './Title.css'

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
        <hr/>
    </div>
  )
}

export default Title