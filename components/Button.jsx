import React from 'react'

export default function Button({ setSelected, setViewData, content, handleClick }) {
  return (
    <button
      className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-primary transition 
    ${selected === "Events" && "bg-orange-300"}`}
      onClick={_ => handleClick()}
    >
      {content}
    </button>
  )
}

