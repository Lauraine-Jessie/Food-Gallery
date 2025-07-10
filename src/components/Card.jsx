import React from 'react'
import Button from '../Button/Button'


const Card = (props) => {
  return (
    <div className='card'>
        <h2 className='card-title'>{props.title}</h2>
        <img 
            className='card-image'
            src={props.image} 
            alt={props.title} 
            style={
                {width: '60%', 
                  height: 'auto',
                borderRadius: '7px'}
        
        }/>
        <p className='card-text'>{props.text}</p>
        <Button className={props.style}></Button>
        </div>
  )
}

export default Card