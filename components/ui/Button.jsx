import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-green-500 rounded-lg px-4 py-2 text-white">
        {text}
    </button>
  )
}

export default Button