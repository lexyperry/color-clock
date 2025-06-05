import { useState } from 'react'
import './App.css'
import { format } from 'date-fns'; // from running npm install date-fns in the terminal

function App() {

  return (
    <>
      <div>
        <p>{format(new Date(), 'MMMM dd, yyyy HH:mm:ss')}</p>
      </div>
    </>
  )
}

export default App
