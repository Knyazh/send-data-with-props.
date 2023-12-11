import React from 'react'
import './welcome.css'

const WelcomeMessage = (props) => {
  return (
    <div>Welcome : {props.name}</div>
  )
}

export default WelcomeMessage