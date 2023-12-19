import React from 'react'
import './welcome.css'

const WelcomeMessage = (props) => {
  return (
    <div  className='nameDiv'><p>
      Welcome : {props.name}
      </p></div>
  )
}

export default WelcomeMessage