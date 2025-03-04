import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3Hv6iGG5mrI76aruo7gRz7BTVzMs1SV2wo6hi-ohzY7bF6bxFCYLTqNsCO8GdB8jt2lHehNqcpDfRNYEJ-utWtQ' alt='random' width={300} style={{border:"2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.Description}</p>
    </div>
  )
}

export default Card
