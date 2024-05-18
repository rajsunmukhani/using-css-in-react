import React, { useRef } from 'react'
import css from './App.module.css'

function App() {

  const focusHead = useRef(null);

  setTimeout(() => {
    console.log(focusHead);
    focusHead.current.style.color = "royalBlue"
  }, 1000);

  return (
    <div>
      <h1 ref={focusHead} className={css.heading}>Hye</h1>
    </div>
  )
}

export default App