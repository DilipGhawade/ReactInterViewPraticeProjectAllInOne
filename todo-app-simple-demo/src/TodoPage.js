

import React, { useState } from 'react'

const TodoPage = () => {
    const [todos,setTodos] = useState([])
    const [input,setInput] = useState("")
    const [editIndex,setEdintIndex] = useState(null)
    
  return (
    <div>TodoPage</div>
  )
}

export default TodoPage 